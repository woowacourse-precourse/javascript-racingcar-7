/**
 * @class ErrorHandler
 * @description 입력값에 대한 유효성을 검사 및 에러 메시지 출력
 */
class ErrorHandler {
  /**
   * @description 자동차 이름이 5자 이하인지 확인
   * @param {string} name 자동차 이름
   */
  checkCarName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5자 초과");
    }
  }

  /**
   * @description 자동차 이름이 공백인지 확인
   * @param {string} name 자동차 이름
   */
  checkCarNull(name) {
    if (name.trim() === "") {
      throw new Error("[ERROR] 자동차 이름이 비어있음");
    }
  }

  /**
   * @description 시도 횟수가 자연수인지 확인
   * @param {number} attempt 시도 횟수
   */
  checkAttemptInt(attempt) {
    if (!Number.isInteger(attempt) || attempt <= 0) {
      throw new Error("[ERROR] 시도 횟수가 자연수가 아님");
    }
  }
}

export default ErrorHandler;
