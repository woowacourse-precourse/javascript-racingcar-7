class InputValidator {
  validateCarNames(carNames) {
    carNames.forEach((name) => {
      if (!name.trim()) {
        throw new Error("[ERROR] 자동차 이름에 빈 값을 입력할 수 없습니다.");
      }
      if (name.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }

  validateMoveCount(moveCount) {
    if (!/^\d+$/.test(moveCount) || Number(moveCount) < 1) {
      throw new Error("[ERROR] 이동 횟수는 1 이상의 숫자여야 합니다.");
    }
  }
}

export default InputValidator;
