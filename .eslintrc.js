module.exports = {
  root: true,
  extends: ["universe/native"],
  plugins: ["unused-imports"],
  globals: {
    __dirname: true,
  },

  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
