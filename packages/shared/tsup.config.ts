import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./index.ts"], // Entry point
  outDir: "dist", // Output directory
  format: ["esm"], // Output format
  dts: true, // Generate .d.ts files
  minify: true, // Minify output
  sourcemap: true, // Generate sourcemaps
  treeshake: true, // Remove unused code
  splitting: true, // Split output into chunks
  clean: true, // Clean output directory before building
});
