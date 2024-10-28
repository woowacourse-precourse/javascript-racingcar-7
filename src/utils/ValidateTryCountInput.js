export default class ValidateTryCountInput {
  static validate(count) {
    if (isNaN(count)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    const numberedCount = Number(count);

    if (numberedCount < 1 || numberedCount > 100) {
      throw new Error("[ERROR] 시도 횟수는 1 이상 100 이하의 숫자여야 합니다.");
    }
  }
}
