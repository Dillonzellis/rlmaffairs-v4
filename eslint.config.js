import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default tseslint.config(
  // Global ignores, applied first
  {
    ignores: ["dist", "build", "node_modules"],
  },

  // Apply base recommended JavaScript rules for all JS files
  js.configs.recommended,

  // Apply recommended TypeScript rules for TS files
  ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      // Define browser globals (e.g., window, document)
      globals: globals.browser,
      // Configure the parser for TypeScript files to use typed linting
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json"], // Specify the location of your tsconfig file
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // Custom overrides and additional rules
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "warn",
    },
  },
);
