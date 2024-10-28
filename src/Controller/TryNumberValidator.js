// 유효성 검증
class TryNumberValidator {
  static validate(tryNumber) {
    this.checkIfNaN(tryNumber);
    this.checkIfInteger(tryNumber);
    this.checkIfPositive(tryNumber);

    return tryNumber;
  }

  static checkIfNaN(tryNumber) {
    // 숫자가 아닌 경우
    if (Number.isNaN(tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수로 문자를 입력할 수 없습니다.");
    }
  }

  static checkIfInteger(tryNumber) {
    // 정수가 아닌 경우
    if (!Number.isInteger(tryNumber)) {
      throw new Error("[ERROR] 시도할 횟수로 실수를 입력할 수 없습니다.");
    }
  }

  static checkIfPositive(tryNumber) {
    // 음수나 0인 경우
    if (tryNumber <= 0) {
      throw new Error("[ERROR] 시도할 횟수로 음수 및 0을 입력할 수 없습니다.");
    }
  }
}

export default TryNumberValidator;
