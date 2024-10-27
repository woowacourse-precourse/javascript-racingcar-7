class IInputView {
  readInput(string) {
    throw new Error('readInput() 메서드는 반드시 오버라이딩 되어야 합니다.');
  }
}

export default IInputView;
