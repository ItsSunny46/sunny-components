import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  build: {
    lib: {
      entry: "src/index.ts", // Main entry file
      name: "SunnyComponents",
      fileName: (format) => `index.${format}.js`,
      formats: ["es", "cjs"] // Output both ESM & CJS
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Prevents bundling React
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});
