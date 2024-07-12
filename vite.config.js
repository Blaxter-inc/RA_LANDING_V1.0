import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  esbuild: {
    jsxFactory: "React.createElement",
    jsxInject: `import React from 'react';`,
  },
});
