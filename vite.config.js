import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 3000 포트로 열기
  server: {
    port: 3000,
  },
});
