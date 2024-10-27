// 사용자 입력을 받아 파싱
class InputHandler {
  /**
   * 쉼표로 구분된 자동차 이름을 배열로 분리
   * @param {*} input
   * @returns
   */
  parseCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    return carNames;
  }

  /**
   * 시도 횟수를 숫자로 변환
   * @param {*} input
   * @returns
   */
  parseAttempts(input) {
    const attempts = Number(input);
    return attempts;
  }
}

export default InputHandler;
