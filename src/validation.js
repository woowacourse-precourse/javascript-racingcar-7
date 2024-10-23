class InputValidation {
  static #MAX_CAR_NAME_LENGTH = 5;

  static validateCarNameList(input) {
    this.#validateMaxLength(input);
    this.#validateDuplicatedCarName(input);
  }

  static #validateMaxLength(input) {
    if (this.#isWithinMaxLength(input)) {
      return;
    }

    throw new Error("[ERROR]: 자동차의 이름은 5이하여야 해요.");
  }

  static #isWithinMaxLength(input) {
    return input.every((input) => input.length <= this.#MAX_CAR_NAME_LENGTH);
  }

  static #validateDuplicatedCarName(input) {
    if (new Set(input).size === input.length) {
      return;
    }

    throw new Error("[ERROR]: 중복된 자동차의 이름은 사용할 수 없어요.");
  }

  static validateAttemptLimit(input) {
    if (Number.isSafeInteger(input) && input >= 0) {
      return;
    }

    throw new Error("[Error]: 시도할 횟수는 0 이상의 정수를 입력해주세요.");
  }
}

export default InputValidation;
