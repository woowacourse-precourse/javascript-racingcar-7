class CarNameValidator {
  static validate(input) {
    this.checkEmptyInput(input);
    const names = this.splitAndTrimNames(input);
    this.checkEmptyNames(names);
    this.checkInvalidSeparators(names);
    this.checkNameLength(names);
    this.checkUniqueNames(names);
    return names; // 유효한 자동차 이름 반환
  }

  static checkEmptyInput(input) {
    if (!input.trim()) {
      throw new Error(`[ERROR] 경주할 자동차 이름을 입력하세요.`);
    }
  }

  static splitAndTrimNames(input) {
    return input.split(",").map((name) => name.trim());
  }

  static checkEmptyNames(names) {
    const hasEmptyName = names.some((name) => name.length === 0);
    if (hasEmptyName) {
      throw new Error(`[ERROR] 자동차 이름은 빈 문자열이 포함될 수 없습니다.`);
    }
  }

  static checkInvalidSeparators(names) {
    const invalidSeparator = names.some(
      (name) => /[^a-zA-Z0-9가-힣]/.test(name) // 쉼표 제외
    );
    if (invalidSeparator) {
      throw new Error(
        `[ERROR] 각 자동차를 구분하는 구분자는 쉼표(,)만 가능합니다.`
      );
    }
  }

  static checkNameLength(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw new Error(`[ERROR] 자동차 이름은 5자 이하만 가능합니다.`);
      }
    });
  }

  static checkUniqueNames(names) {
    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error(
        `[ERROR] 서로 다른 이름으로 자동차의 이름들을 지정하세요.`
      );
    }
  }
}

export default CarNameValidator;
