class InputValidator {
  static validateCarName(names) {
    if (names.some((name) => name.length === 0)) {
      throw new Error('자동차 이름은 빈칸일 수 없습니다.');
    }
    if (names.some((name) => name.length > 5)) {
      throw new Error('자동차 이름은 5자 이하만 가능 합니다.');
    }
    const hasDuplicates = names.length !== new Set(names).size;
    if (hasDuplicates) {
      throw new Error('중복되는 자동차 이름이 있습니다.');
    }
    if (names.length < 2) {
      throw new Error('자동차 이름은 쉼표(,)로 구분되어야 합니다.');
    }
  }

  static validateAttemptCount(attemptCount) {
    if (Number.isNaN(Number(attemptCount)) || attemptCount <= 0) {
      throw new Error('시도 횟수는 양수여야 합니다.');
    }
  }
}
export default InputValidator;
