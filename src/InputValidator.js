class InputValidator {
  static ERROR_EMPTY_NAME = "[ERROR] 자동차 이름에 빈 값을 입력할 수 없습니다.";
  static ERROR_LONG_NAME = "[ERROR] 자동차 이름은 5자 이하만 가능합니다.";
  static ERROR_DUPLICATE_NAME = "[ERROR] 자동차 이름에 중복된 값이 있습니다.";
  static ERROR_INVALID_MOVE_COUNT =
    "[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다.";

  validateCarNames(carNames) {
    carNames.forEach(this.validateSingleCarName);
    this.checkForDuplicateNames(carNames);
  }

  validateSingleCarName(name) {
    if (!name.trim()) {
      throw new Error(InputValidator.ERROR_EMPTY_NAME);
    }
    if (name.length > 5) {
      throw new Error(InputValidator.ERROR_LONG_NAME);
    }
  }

  checkForDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);
    if (uniqueNames.size !== carNames.length) {
      throw new Error(InputValidator.ERROR_DUPLICATE_NAME);
    }
  }

  validateMoveCount(moveCount) {
    if (!/^\d+$/.test(moveCount) || Number(moveCount) < 1) {
      throw new Error(InputValidator.ERROR_INVALID_MOVE_COUNT);
    }
  }
}

export default InputValidator;
