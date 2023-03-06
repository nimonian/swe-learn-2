export const progress = reactive({
  passed: 0,
  failed: 0,
  loaded: false,
  setProgress(testResults) {
    this.passed = testResults.numPassedTests || 0;
    this.failed = testResults.numFailedTests || 0;
    this.loaded = true;
  },
});
