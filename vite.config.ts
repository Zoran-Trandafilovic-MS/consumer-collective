import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && screenGraphPlugin()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  optimizeDeps: {
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    force: false,
    esbuildOptions: {
      preserveSymlinks: true
    }
  },
  server: {
    fs: {
      strict: false
    },
    watch: {
      usePolling: true,
      interval: 100
    },
    hmr: {
      overlay: true
    }
  }
}));
