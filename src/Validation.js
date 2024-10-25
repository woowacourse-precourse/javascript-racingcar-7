class Validation {
  #maxNameLength;

  #nameSeparator;

  constructor(maxNameLength, nameSeparator) {
    this.#maxNameLength = maxNameLength;
    this.#nameSeparator = nameSeparator;
  }

  #isValidLength(name) {
    if (name.length > this.#maxNameLength) {
      throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
    }

    if (name.length < 1) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    }

    return true;
  }

  static isNoDuplicated(names) {
    const nameSet = new Set(names);
    if (nameSet.size !== names.length) {
      throw new Error('[ERROR] 자동차 이름은 중복해서 입력할 수 없습니다.');
    }

    return true;
  }
}

export default Validation;
