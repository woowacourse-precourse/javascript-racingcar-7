import ERROR_MESSAGES from '../constants/Messages';

class InputValidator {
  static validateCarNames(carNames) { // 자동차 이름 검증
    if (carNames.some((name) => !name || name.trim() === '')) {
      // 문자열 양 끝의 공백을 제거했을 때 비었으면
      throw new Error(ERROR_MESSAGES.EMPTY_NAME);
    }

    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length) {
      throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
    }
  }

  static validateAttempts(input) { // 시도 횟수 검증
    const attempts = parseInt(input, 10);
    if (Number.isNaN(attempts) || attempts <= 0) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPTS);
    }
    return attempts;
  }
}

export default InputValidator;
