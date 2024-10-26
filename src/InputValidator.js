export default class InputValidator {
  constructor(input) {
    this.input = input;
    this.validateInput();
  }

  validateInput() {
    this.validateSpace();
    this.inputList = this.input.split(',');
    this.validateLength();
  }

  validateSpace() {
    if (this.input.split(' ')[0] !== this.input) {
      throw new Error('[ERROR] 잘못된 입력입니다.');
    }
  }

  validateLength() {
    this.inputList.forEach((item) => {
      if (item.length > 5) {
        throw new Error('[ERROR] 잘못된 입력입니다.');
      }
    });
  }
}