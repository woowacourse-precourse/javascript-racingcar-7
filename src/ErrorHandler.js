import { Console } from "@woowacourse/mission-utils";

class ErrorHandler {
  /**
   * 자동차 이름이 5자 이하인지 확인
   * @param {string} name 자동차 이름
   */
  checkCarName(name) {
    if (name.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 5자를 초과");
    }
  }

  /**
   * 자동차 이름이 공백인지 확인
   * @param {string} name 자동차 이름
   */
  checkCarNull(name) {
    if (name.trim() === "") {
      throw new Error("[ERROR] 자동차 이름이 비어 있습니다.");
    }
  }

  /**
   * 시도 횟수가 자연수인지 확인
   * @param {number} attempt 시도 횟수
   */
  checkAttemptInt(attempt) {
    if (!Number.isInteger(attempt) || attempt <= 0) {
      throw new Error("[ERROR] 시도 횟수가 1 이상의 자연수가 아닙니다.");
    }
  }
}

export default ErrorHandler;
