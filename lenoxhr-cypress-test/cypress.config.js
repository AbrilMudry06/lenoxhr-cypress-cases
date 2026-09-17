const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cloud.lenoxhr.com",
    video: false,
  },
});
