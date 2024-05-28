import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import path from "path";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: [
      ...["pages", "components"].map((dirName) => ({
        find: dirName,
        replacement: path.resolve(__dirname, `src/${dirName}`),
      })),
    ],
  },
});
