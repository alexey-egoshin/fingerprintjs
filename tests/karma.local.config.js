module.exports = (config) => {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    basePath: '..',
    files: [
      'src/**/*.ts',
      'tests/**/*.ts',
      'dist/fp.min.js',
    ],
    preprocessors: {
      '**/*.ts': 'karma-typescript',
    },
    reporters: ['spec', 'summary'],
    browsers: ['ChromeHeadless', 'FirefoxHeadless'],

    karmaTypescriptConfig: {
      compilerOptions: {
        ...require('../tsconfig.json').compilerOptions,
        module: 'commonjs',
        sourceMap: true,
      },
    },

    specReporter: {
      suppressErrorSummary: true,
      suppressPassed: true,
      suppressSkipped: true,
      // todo: Suppress the summary completely when https://github.com/mlex/karma-spec-reporter/issues/83 is solved
    },

    summaryReporter: {
      show: 'skipped', // To know that some tests are skipped exactly where they are supposed to be skipped
    },
  })
}
