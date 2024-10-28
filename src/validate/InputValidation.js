import { ERROR_MESSAGES } from "../constant/error.js"

/**
 * 사용자 입력값의 유효성을 검사하는 클래스
 * @class
 */
class InputValidation {
  /**
   * 자동차 이름들의 유효성을 검사
   * 이름은 5자 이하여야 하며, 공백일 수 없음, 중복을 허용하지 않음
   * @param {string[]} names - 검사할 자동차 이름들의 배열
   * @returns {Promise<void>}
   * @throws {Error} 이름이 5자를 초과하는 경우
   * @throws {Error} 이름이 공백인 경우가 있는 경우
   * @throws {Error} 이름이 중복인 경구
   * @async
   * @example
   * await InputValidation.validationName(["pobi", "woni"]) // valid
   * await InputValidation.validationName(["pobiiii"]) // throws Error
   * await InputValidation.validationName(["", "woni"]) // throws Error
   * await InputValidation.validationName(["pobi","pobi","woni"]) // throws Error
   */
  static async validationName(names) {
    if (names.some(name => name.length > 5)) {
      throw new Error(ERROR_MESSAGES.LENGTH_OVER_CAR_NAME);
    }
    if (names.some(name => name === "")) {
      throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
    }
    if (names.length!==new Set(names).size){
      throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME)
    }
  }

  /**
   * 시도 횟수의 유효성을 검사
   * 시도 횟수는 숫자여야 하며, 양수
   * @param {number} attempts - 검사할 시도 횟수
   * @returns {Promise<void>}
   * @throws {Error} 시도 횟수가 숫자가 아닌 경우
   * @throws {Error} 시도 횟수가 음수인 경우
   * @throws {Error} 시도 횟수가 0인 경우
   * @throws {Error} 시도 횟수가 공백인 경우
   * @async
   * @example
   * await InputValidation.validationAttempts(3) // valid
   * await InputValidation.validationAttempts("abc") // throws Error
   * await InputValidation.validationAttempts(-1) // throws Error
   * await InputValidation.validationAttempts(0) // throws Error
   * await InputValidation.validationAttempts("") // throws Error
   */
  static async validationAttempts(attempts) {
    if (isNaN(attempts)) {
      throw new Error(ERROR_MESSAGES.NAN_ATTEMPTS);
    }
    if (attempts < 0) {
      throw new Error(ERROR_MESSAGES.NEGATIVE_ATTEMPTS);
    }
    if (attempts === 0) {
      throw new Error(ERROR_MESSAGES.ZERO_ATTEMPTS)
    }
    if (attempts === "") {
      throw new Error(ERROR_MESSAGES.EMPTY_ATTEMPTS);
    }
  }
}

export default InputValidation;