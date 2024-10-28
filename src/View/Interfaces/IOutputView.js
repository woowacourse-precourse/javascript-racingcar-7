class IOutputView {
  printOutput(string) {
    throw new Error('printOutput' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default IOutputView;
