import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import devServer from "@hono/vite-dev-server";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    devServer({
      entry: "./server.mjs",
      exclude: [/^(?!\/api).*/],
    }),
  ],
});
