import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("standard-with-typescript"),
  { ...pluginReactConfig, settings: { react: { version: "detect" } } },
  { files: ["src/**/*.{ts,tsx}"] },
  {
    rules: {
      "no-extra-boolean-cast": "off",
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  },
  eslintPluginPrettier,
];
