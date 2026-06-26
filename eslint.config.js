import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore generated and temporary files
  {
    ignores: ["node_modules/**", "coverage/**", "dist/**", "scratch/**"],
  },

  // Recommended JS rules
  js.configs.recommended,

  // Backend (Node.js)
  {
    files: ["src/**/*.js", "tests/**/*.js"],
    ignores: ["src/public/**"],
    languageOptions: {
      globals: globals.node,
    },
  },

  // Frontend (Browser)
  {
    files: ["src/public/**/*.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
]);
