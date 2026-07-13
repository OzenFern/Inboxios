import "dotenv/config";
import express from "express";
import morgan from "morgan";
import methodOverride from "method-override";
import helmet from "helmet";
import compression from "compression";
import pageRouter from "./routes/page.js";
import taskRouter from "./routes/tasks.js";
import errorRouter from "./routes/error.js";
import setLocals from "./config/locals.js";
import path from "path";
import { fileURLToPath } from "url";
import { checkDatabase } from "./services/databaseService.js";
import { ROUTES } from "./config/routes.js";

const PORT = process.env.PORT;
const app = express();

// Check if .env variables exist
if (!PORT) throw new Error("PORT environment variable is required");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup EJS template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Global EJS variables
setLocals(app);

// Middlewares
app.use(
  // Add secure headers
  helmet({
    contentSecurityPolicy: false,
  }),
);
app.use(compression()); // Compresses files

// Monitoring HTTP requests
app.use(morgan("dev"));

// Parse Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Implement method-override
app.use(methodOverride("_method"));

// Cache public folder
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "30d",
  }),
);

// Handle homepage route
app.use("/", pageRouter);
// Handle all routes for tasks
app.use(ROUTES.TASKS, taskRouter);
// Handle routes to show errors on purpose
app.use(ROUTES.ERROR, errorRouter);

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
