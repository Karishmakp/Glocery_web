import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct paths for deployment
  build: {
    rollupOptions: {
      input: "./index.html", // Entry point
    },
  },
  server: {
    port: 5173, // Change if needed
    open: true, // Opens browser on start
  },
});
