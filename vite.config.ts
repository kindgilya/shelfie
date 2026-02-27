import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@entities": path.resolve(__dirname, "src/entities"),
      "@features": path.resolve(__dirname, "src/features"),
      "@shared": path.resolve(__dirname, "src/shared"),
      "@assets": path.resolve(__dirname, "src/shared/assets"),
      "@styles": path.resolve(__dirname, "src/shared/assets/styles"),
      "@images": path.resolve(__dirname, "src/shared/assets/images"),
      "@icons": path.resolve(__dirname, "src/shared/assets/icons"),
      "@fonts": path.resolve(__dirname, "src/shared/assets/fonts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@processes": path.resolve(__dirname, "src/processes"),
    },
  },
});
