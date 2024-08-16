import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


export default defineConfig({
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      "@infra": "/src/infra",
      "@assets": "/src/assets",
      "@lib": "/src/lib",
      "@core": "/src/core",
      "@services": "/src/services",
    },
  },
  plugins: [react()],
});
