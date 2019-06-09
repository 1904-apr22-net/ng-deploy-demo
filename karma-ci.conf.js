const karmaConf = require('./karma.conf');

module.exports = function (config) {
  karmaConf(config);
  config.set({
    plugins: config.plugins.concat([
      require('karma-junit-reporter')
    ]),
    junitReporter: {
      outputDir: 'artifacts/test/unit',
      outputFile: 'TEST-unit.xml'
    },
    reporters: ['junit'],
    colors: false,
    browsers: ['ChromiumCI'],
    customLaunchers: {
      ChromiumCI: {
        base: 'ChromiumHeadless',
        flags: ['--no-sandbox', '--enable-gpu']
      }
    },
    browserNoActivityTimeout: 120000,
    captureTimeout: 120000
  });
};
