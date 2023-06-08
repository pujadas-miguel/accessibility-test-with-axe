const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
        inline: true,
        code: true,
        autoOpen: true,
        showHooks: 'always'
    },
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        }
    },
    screenshotsFolder: 'reports/images',
    retries: {
        runMode: 0,
        openMode: 0
    },
    watchForFileChanges: true
});
