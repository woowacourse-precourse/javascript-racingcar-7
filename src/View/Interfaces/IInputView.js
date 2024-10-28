class IInputView {
  readInput(string) {
    throw new Error('readInput' + ERROR_MESSAGES.MUST_OVERRIDE_METHOD);
  }
}

export default IInputView;
