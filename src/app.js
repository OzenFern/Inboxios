import "dotenv/config";
import express from "express";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import pageRouter from "./routes/page.js";
import taskRouter from "./routes/tasks.js";
import { checkDatabase } from "./services/databaseService.js";

const PORT = process.env.PORT;
const app = express();

// Check if .env variables exist
if (!PORT) throw new Error("PORT environment variable is required");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Monitoring HTTP requests
app.use(express.static(path.join(__dirname, "public")));

// Handle homepage route
app.use("/", pageRouter);
// Handle all routes for tasks
app.use("/api/tasks", taskRouter);

// Handles invalid routes
app.use((req, res) => {
  console.warn(`Error: Cannot ${req.method} ${req.originalUrl}`);

  return res.status(404).render("404");
});

// Handles server error
app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err); // Passed on to Express's internal error middleware
  }

  if (req.path.startsWith("/api")) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  return res.status(500).render("500");
});

// Start server if database schema is valid
(async () => {
  console.log("Validating database schema...");

  try {
    const database = await checkDatabase();

    const title = database.title?.[0]?.plain_text ?? "Unknown Database";

    console.log(`✓ Connected to: ${title}`);
    console.log("✓ Database schema is valid");

    app.listen(PORT, () => {
      console.log(`Inboxios live at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:");
    console.error(error.message);
    process.exit(1);
  }
})();
