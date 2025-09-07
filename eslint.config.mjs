import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Config custom TypeScript + React Hooks
  {
    ignores: ["dist/**", "node_modules/**", ".next/**"],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tsPlugin,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^@/env"],
            // Node.js imports (builtin modules).
            ["^node"],
            // Next.js imports
            ["^@?\\w"],
            // Prisma
            ["^@prisma"],
            // Scoped packages, começando por @sabia.
            ["^@sabia"],
            // Tipagens
            ["^@/@types"],
            // Internal components.
            ["^@/components", "^components"],
            // Providers.
            ["^@/providers"],
            // Services.
            ["^@/service"],
            // Utilities.
            ["^@/utils"],
            // Errors.
            ["^@/erros"],
            // Outros scoped packages.
            ["^@"],
            // Parent imports.
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            // Other relative imports (same-folder and `.` last).
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            // Style imports.
            ["^.+\\.?(css)$"],
          ],
        },
      ],
      "simple-import-sort/exports": "error",
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      indent: ["error", 2], // indentação automática de 2 espaços
      "react-refresh/only-export-components": "off",
      rules: {
        semi: ["error", "never"],
      },
    },
  },

  // aplica configs antigas do Next.js usando compat
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
