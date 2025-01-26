import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Create separate chunks for dependencies from node_modules
            return id.toString().split("node_modules/")[1].split("/")[0];
          }
        },
      },
    },
  },
});
