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
      "@core": "/src/core",
      "@domain": "/src/domain",
    },
  },
  plugins: [react()],
});
