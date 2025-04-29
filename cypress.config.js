import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  experimentalStudio: true,
  reporterOptions: {
    reportDir: 'cypress/reports', // Lokasi penyimpanan laporan
    overwrite: false, // Jangan timpa laporan lama
    html: true, // Output dalam format HTML
    json: true // Output dalam format JSON
  },
  viewportHeight: 768,
  viewportWidth: 1500,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 60000,

  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
