class Validation {
  static isValidLength(name, maxNameLength) {
    if (name.length > maxNameLength) {
      throw new Error('[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.');
    }

    if (name.length < 1) {
      throw new Error('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    }
  }

  static isNoDuplicated(names) {
    const nameSet = new Set(names);
    if (nameSet.size !== names.length) {
      throw new Error('[ERROR] 자동차 이름은 중복해서 입력할 수 없습니다.');
    }
  }

  static isNumber(totalRounds) {
    if (Number.isNaN(totalRounds)) {
      throw new Error(
        '[ERROR] 자동차 이동 시도 횟수는 숫자로만 입력 가능합니다.',
      );
    }
  }

  static isValidTotalRounds(totalRounds) {
    if (!Number.isInteger(totalRounds)) {
      throw new Error(
        '[ERROR] 자동차 이동 시도 횟수는 1이상의 정수로만 입력 가능합니다.',
      );
    }

    if (totalRounds < 1) {
      throw new Error('[ERROR] 자동차 이동 시도 횟수는 1회 이상이어야 합니다.');
    }
  }

  static carNames(names, maxNameLength) {
    const targetNames = [...names];
    this.isNoDuplicated(targetNames);
    targetNames.forEach((name) => this.isValidLength(name, maxNameLength));

    return targetNames;
  }

  static totalRounds(totalRounds) {
    this.isNumber(totalRounds);
    this.isValidTotalRounds(totalRounds);

    return totalRounds;
  }
}

export default Validation;
