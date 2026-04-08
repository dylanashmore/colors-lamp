module.exports = [
  {
    ignores: ["public/js/md5.js"]
  },
  {
    files: ["public/js/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        fetch: "readonly",
        alert: "readonly",
        XMLHttpRequest: "readonly"
      }
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "error",
      semi: "off",
      quotes: "off"
    }
  }
];