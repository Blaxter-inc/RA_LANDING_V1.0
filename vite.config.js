import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/RA_LANDING_V1.0/", // Ensure this is the correct repository name
  esbuild: {
    jsxFactory: "React.createElement",
    jsxInject: `import React from 'react';`,
  },
});
