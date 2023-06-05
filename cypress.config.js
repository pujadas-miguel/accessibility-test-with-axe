const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false
    },
    e2e: {
        baseUrl: 'https://en.wikipedia.org/',
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            on('task', {
                log(message) {
                    console.log(message);

                    return null;
                },
                table(message) {
                    console.table(message);

                    return null;
                }
            });
        }
    },
    screenshotsFolder: 'reports/images',
    retries: {
        runMode: 0,
        openMode: 0
    },
    watchForFileChanges: true
});
