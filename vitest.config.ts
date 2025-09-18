/// <reference types="vitest/config" />
import path from "node:path";
import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    name: "Unit-test",
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    exclude: [
      ...configDefaults.exclude,
      "**/node_modules/**",
      "**/prisma/**",
      "**/dist/**",
      "**/build/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
      "**/@types/**",
      "**/data/**",
      "**/components/ui/**",
      "**/generated/**",
      "**/i18n/**",
      "**/*.e2e.{test,spec}.?(c|m)[jt]s?(x)",
    ],
    coverage: {
      exclude: [
        ...configDefaults.exclude,
        "**/node_modules/**",
        "**/prisma/**",
        "**/dist/**",
        "**/build/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*",
        "**/@types/**",
        "**/data/**",
        "**/components/ui/**",
        "**/generated/**",
        "**/i18n/**",
      ],
      provider: "istanbul",
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
