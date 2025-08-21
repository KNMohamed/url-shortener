module.exports = {
  env: {
    node: true,
    es2022: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "commonjs",
  },
  rules: {
    "no-console": "off", // Allow console.log in server
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "prefer-const": "error",
    "no-var": "error",
    eqeqeq: "error",
    curly: "error",
  },
};
