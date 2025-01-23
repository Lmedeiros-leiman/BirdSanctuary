import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";


const root = path.resolve(__dirname, "./");
const publicDir = path.resolve(__dirname, "./public/");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
  publicDir,
  base : process.env.NODE_ENV === 'production' ? "/" : "/BirdSanctuary/",
  build: {
    target: "esnext",
    emptyOutDir: true,
    assetsDir: "assets",
  },
  
});
