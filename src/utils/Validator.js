class Validator {
  static validateCarNames(names) {
    this.validateDuplicateCarName(names);
    names.forEach(this.validateCarName);
  }

  static validateCarName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.");
    }
    if (!name || name.trim().length === 0) {
      throw new Error("[ERROR] 자동차 이름은 공백일 수 없습니다.");
    }
  }

  static validateDuplicateCarName(names) {
    const uniqueNames = new Set(names); // Set은 중복 허용 x
    if (uniqueNames.size !== names.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }

  static validateTryCount(countInput) {
    const count = Number(countInput);

    if (count <= 0) {
      throw new Error("[ERROR] 시도 횟수는 1이상이어야 합니다.");
    }

    if (Number.isNaN(count)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    return count;
  }
}

export default Validator;
