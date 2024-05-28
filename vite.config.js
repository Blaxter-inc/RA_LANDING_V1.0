// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: "React.createElement", // Specify the JSX factory
    jsxInject: `import React from 'react';`, // Inject React import for JSX
  },
});
