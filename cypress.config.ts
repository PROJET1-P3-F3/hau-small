import { defineConfig } from "cypress";

export default defineConfig({
  video: false,

  retries: {
    runMode: 3,
    openMode: 0,
  },

  viewportWidth: 650,
  viewportHeight: 944,
  defaultCommandTimeout: 30000,
  reporter: "cypress-multi-reporters",

  reporterOptions: {
    reporterEnabled: "cypress-sonarqube-reporter",
    mergeFileName: "test-reports.xml",
    cypressSonarqubeReporterReporterOptions: {
      overwrite: true,
    },
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
