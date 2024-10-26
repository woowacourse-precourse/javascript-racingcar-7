/**
 * 사용자 입력값의 유효성을 검사하는 클래스
 * @class
 */
class InputValidation {
  /**
   * 자동차 이름들의 유효성을 검사
   * 이름은 5자 이하여야 하며, 공백일 수 없음
   * @param {string[]} names - 검사할 자동차 이름들의 배열
   * @returns {Promise<void>}
   * @throws {Error} 이름이 5자를 초과하는 경우
   * @throws {Error} 이름이 공백인 경우가 있는 경우
   * @async
   * @example
   * await InputValidation.validationName(["pobi", "woni"]) // valid
   * await InputValidation.validationName(["pobiiii"]) // throws Error
   * await InputValidation.validationName(["", "woni"]) // throws Error
   */
  static async validationName(names) {
    if (names.some(name => name.length > 5)) {
      throw new Error("[ERROR] : 자동차 이름은 5자 이하만 가능합니다.");
    }
    if (names.some(name => name === "")) {
      throw new Error("[ERROR] : 자동차 이름은 공백일 수 없습니다. ");
    }
  }

  /**
   * 시도 횟수의 유효성을 검사
   * 시도 횟수는 숫자여야 하며, 양수
   * @param {number} attempts - 검사할 시도 횟수
   * @returns {Promise<void>}
   * @throws {Error} 시도 횟수가 숫자가 아닌 경우
   * @throws {Error} 시도 횟수가 음수인 경우
   * @async
   * @example
   * await InputValidation.validationAttempts(3) // valid
   * await InputValidation.validationAttempts("abc") // throws Error
   * await InputValidation.validationAttempts(-1) // throws Error
   */
  static async validationAttempts(attempts) {
    if (isNaN(attempts)) {
      throw new Error("[ERROR] : 시도 횟수는 숫자만 가능합니다.");
    }
    if (attempts < 0) {
      throw new Error("[ERROR] : 시도 횟수는 양수만 가능합니다.");
    }
  }
}

export default InputValidation;