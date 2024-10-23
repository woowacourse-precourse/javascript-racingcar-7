class InputValidation {
  static #MAX_CAR_NAME_LENGTH = 5;

  static validateCarNameList(input) {
    this.#validateMaxLength(input);
    this.#validateDuplicatedCarName(input);
  }

  static #validateMaxLength(input) {
    input.forEach((input) => {
      if (input.length > this.#MAX_CAR_NAME_LENGTH) {
        throw new Error("[ERROR]: 자동차의 이름은 5이하여야 해요.");
      }
    });
  }

  static #validateDuplicatedCarName(input) {
    if (new Set(input).length !== input.length) {
      throw new Error("[ERROR]: 중복된 자동차의 이름은 사용할 수 없어요.");
    }
  }
}

export default InputValidation;
