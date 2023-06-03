import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  /*
  server: {
    proxy: {
      "/api": {
        target: "http://tecnical.bewe.co",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  */
  plugins: [react()],
});
