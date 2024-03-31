import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/static/",
  build: {
    manifest: "manifest.json",
    outDir: resolve("../staticfiles"),
    rollupOptions: {
      input: {
        main: "src/main.tsx",
      },
    },
  },
});
