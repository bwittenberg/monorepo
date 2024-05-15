/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@bwittenberg/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
