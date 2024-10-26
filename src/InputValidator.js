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
}

export default InputValidator;
