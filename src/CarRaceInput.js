class CarRaceInput {
  static validateCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    if (
      carNames.length === 0 ||
      carNames.some((name) => name.length === 0 || name.length > 5)
    ) {
      throw new Error("자동차 이름은 1자 이상 5자 이하로 입력해야 합니다.");
    }
    return carNames;
  }

  static validateAttemptCount(input) {
    const attemptCount = Number(input);
    if (isNaN(attemptCount) || attemptCount <= 0) {
      throw new Error("시도 횟수는 1 이상의 숫자를 입력해야 합니다.");
    }
    return attemptCount;
  }
}

export default CarRaceInput;
