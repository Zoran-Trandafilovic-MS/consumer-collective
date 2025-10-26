import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(),
    // Custom plugin to rewrite absolute paths to relative paths
    {
      name: 'rewrite-to-relative-paths',
      enforce: 'pre',
      transform(code, id) {
        // Only process .tsx and .ts files in production
        if (mode === 'production' && (id.endsWith('.tsx') || id.endsWith('.ts'))) {
          // Replace "/img/ with ./img/
          // Replace "/fonts/ with ./fonts/
          const transformed = code
            .replace(/(['"])\/img\//g, '$1./img/')
            .replace(/(['"])\/fonts\//g, '$1./fonts/');
          return transformed;
        }
        return null;
      }
    }
  ],
  publicDir: "./public",
  base: mode === "production" ? "/consumer-collective/" : "/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  server: {
    fs: {
      strict: false
    },
    watch: {
      usePolling: true
    }
  }
}));
