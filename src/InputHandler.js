// 사용자 입력을 받아 파싱
class InputHandler {
  /**
   * 쉼표로 구분된 자동차 이름을 배열로 분리
   * @param {string} input 자동차 이름들
   * @returns {Array} 자동차 이름들을 ","를 기준으로 나눈 배열
   */
  parseCarNames(input) {
    const carNames = input.split(",").map((name) => name.trim());
    return carNames;
  }

  /**
   * 시도 횟수를 숫자로 변환
   * @param {string} input 시도 횟수
   * @returns 숫자로 변환된 시도 횟수
   */
  parseAttempts(input) {
    const attempts = Number(input);
    return attempts;
  }
}

export default InputHandler;
