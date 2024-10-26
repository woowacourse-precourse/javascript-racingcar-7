import utils from '../utils/utils.js';

class NumberOfTry {
  static #ERROR_MESSAGE = {
    character: '[ERROR] 숫자가 아닌 문자를 입력했습니다.',
    range: '[ERROR] 1 이상의 숫자를 입력해주세요.',
  };

  static #ONLY_NUMBER = /^[+-]?\d+$/;

  #input;

  constructor(input) {
    this.#input = input;
    this.#validate();
  }

  #validate() {
    utils.validateEmpty(this.#input);
    this.#validateCharacter();
    this.#validateRange();
  }

  #validateCharacter() {
    if (!NumberOfTry.#ONLY_NUMBER.test(this.#input)) {
      throw new Error(NumberOfTry.#ERROR_MESSAGE.character);
    }
  }

  #validateRange() {
    if (Number(this.#input) <= 0) {
      throw new Error(NumberOfTry.#ERROR_MESSAGE.range);
    }
  }

  getNumberOfTry() {
    return Number(this.#input);
  }
}

export default NumberOfTry;
