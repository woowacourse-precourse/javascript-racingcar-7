class GameInputValidator {
  static validateNum(input) {
    // 입력값이 숫자인지 확인하고 양수인지 검사
    if (Number.isNaN(input) || Number(input) <= 0 || !Number.isInteger(Number(input))) {
      throw new Error('[ERROR] 잘못 입력');
    }
  }
}

export default GameInputValidator;
