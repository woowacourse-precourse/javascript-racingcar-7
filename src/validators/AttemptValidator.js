class AttemptValidator {
  static validate(roundAttempt) {
    if (roundAttempt === '') {
      throw new Error('[ERROR] 시도 횟수에 공백만 입력하시면 안됩니다.');
    }
    if (Number.isNaN(roundAttempt)) {
      throw new Error('[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.');
    }
    if (roundAttempt < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력하시면 안됩니다.');
    }
  }
}

export default AttemptValidator;
