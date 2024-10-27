class ErrorHandler {
  static validateCarNames(carNamesInput) {
    const carNames = carNamesInput.split(",").map((name) => name.trim());
    if (carNames.length > 10) {
      throw new Error("[ERROR] : 자동차의 대수는 10대를 초과할 수 없습니다.");
    }
    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error("[ERROR] : 이름은 5글자를 초과할 수 없습니다.");
      }
    });
    return carNames;
  }

  static validateAttemptCount(attemptCountInput) {
    const attemptCount = parseInt(attemptCountInput, 10);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("시도할 횟수는 양수여야 합니다.");
    }
    if (attemptCount > 100) {
      throw new Error(" 시도할 횟수는 100회 이하이어야 합니다.");
    }
    return attemptCount;
  }
}

export default ErrorHandler;
