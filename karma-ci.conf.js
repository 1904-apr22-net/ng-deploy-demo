const karmaConf = require('./karma.conf');

module.exports = function (config) {
  karmaConf(config);
  config.set({
    plugins: config.plugins.concat([
      require('karma-junit-reporter')
    ]),
    coverageIstanbulReporter: Object.assign({}, config.coverageIstanbulReporter, {
      reports: ['html', 'cobertura', 'lcovonly', 'verbose']
    }),
    junitReporter: {
      outputDir: 'artifacts/test/unit',
      outputFile: 'TEST-unit.xml'
    },
    reporters: ['junit', 'coverage-istanbul'],
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
