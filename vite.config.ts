import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";


const path = fileURLToPath(import.meta.url);
const root = resolve(dirname(path), "frontend");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root,
});
