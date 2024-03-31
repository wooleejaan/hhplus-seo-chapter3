import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Sitemap from "vite-plugin-sitemap";

const dynamicRoutes = [""].map((path) => `/${path}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({ dynamicRoutes, exclude: ["/admin", "/private"] }),
  ],
});
