import "dotenv/config";
import express from "express";
import morgan from "morgan";
import taskRouter from "./routes/tasks.js";

const PORT = process.env.PORT;
const app = express();

// Check if .env variables exist
if (!PORT) throw new Error("PORT environment variable is required");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Monitoring HTTP requests

// Handle all routes for tasks
app.use("/tasks", taskRouter);

// Handles invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
  console.error(`Error: Cannot ${req.method} ${req.originalUrl}`);
});

// Listen to server on a port
app.listen(PORT, () => {
  console.log(`Inboxios live at http://localhost:${PORT}`);
});
