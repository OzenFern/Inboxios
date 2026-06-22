import "dotenv/config";
import express from "express";
import morgan from "morgan";

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT environment variable is required");
}
