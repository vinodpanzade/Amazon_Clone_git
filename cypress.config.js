// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//  e2e: {
//   specPattern: "cypress/e2e/**/*.feature",
//   setupNodeEvents(on, config) {}
// }
// ,
// });

// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin =
//   require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin =
//   require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config);
//       on(
//         "file:preprocessor",
//         createBundler({
//           plugins: [createEsbuildPlugin(config)],
//         })
//       );
//       return config;
//     },
//   },
// });


//for the html report 

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  // 🔹 REPORT CONFIG (NEW)
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },

  e2e: {
    specPattern: "**/*.feature",
      // ✅ ADD TAG FILTER HERE
    env: {
      TAGS: "@smoke"   // change to @regression when needed
    },
    async setupNodeEvents(on, config) {
      // BDD plugin
      await addCucumberPreprocessorPlugin(on, config);

      // esbuild for feature files
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
