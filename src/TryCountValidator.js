class TryCountValidator {
  static checkPositive(tryCount) {
    if (!Number.isInteger(tryCount) || tryCount < 1) {
      throw new Error("[ERROR]이동횟수는 양의 정수로 입력해주세요.");
    }

    return true;
  }

  static checkOverMax(tryCount) {
    if (tryCount > 100) {
      throw new Error("[ERROR]이동횟수는 100이하로 입력해주세요");
    }

    return true;
  }
}

export default TryCountValidator;
