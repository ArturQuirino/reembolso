const sonarqubeScanner = require('sonarqube-scanner');
sonarqubeScanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.sources': './src',
      'sonar.exclusions': '**/__tests__/**',
      'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
    },
  },
  () => {}
);
