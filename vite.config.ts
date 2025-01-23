import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base:"/BirdSanctuary/",
  build: {
    assetsDir: "assets",
    sourcemap: true,
  },
  plugins: [react()],
});
