import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'], // Entry point for your project
  dts: true, // Generate TypeScript declaration file (.d.ts)
  format: ['esm'], // Format as ESM (ES Module)
  sourcemap: true, // Optional: Generate source maps
  clean: true, // Clean the output directory before building
  outDir: 'dist', // Specify the output directory
});
