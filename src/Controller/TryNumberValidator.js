import { TRY_NUMBER_ERROR } from "../Message/Message.js";

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
      throw new Error(TRY_NUMBER_ERROR.IS_NOT_NUMBER);
    }
  }

  static checkIfInteger(tryNumber) {
    // 정수가 아닌 경우
    if (!Number.isInteger(tryNumber)) {
      throw new Error(TRY_NUMBER_ERROR.IS_NOT_INTEGER);
    }
  }

  static checkIfPositive(tryNumber) {
    // 음수나 0인 경우
    if (tryNumber <= 0) {
      throw new Error(TRY_NUMBER_ERROR.IS_NOT_POSITIVE);
    }
  }
}

export default TryNumberValidator;
