import { Console } from "@woowacourse/mission-utils"
import InputValidation from '../validate/InputValidation.js';

/**
 * 사용자로부터 입력을 받는 뷰 클래스
 * @class
 */
class InputView {
  /**
   * 사용자로부터 자동차 이름들을 입력받음
   * 입력된 이름들은 쉼표(,)로 구분되며, 각 이름의 유효성이 검증
   * @returns {Promise<string>} 쉼표로 구분된 자동차 이름들 문자열
   * @throws {Error} 입력된 이름이 유효하지 않은 경우 (5자 초과 또는 공백)
   * @async
   * @example
   * const names = await InputView.getCarNames()
   * // 사용자 입력: "pobi,woni,jun"
   * // returns: "pobi,woni,jun"
   */
  static async getCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const names = input.split(",").map(name => name.trim());
    await InputValidation.validationName(names);
    return input;
  }

  /**
   * 사용자로부터 시도할 횟수를 입력받음.
   * 입력된 횟수는 양수여야 함
   * @returns {Promise<string>} 입력된 시도 횟수 문자열
   * @throws {Error} 입력된 값이 숫자가 아니거나 음수인 경우
   * @async
   * @example
   * const attempts = await InputView.getAttempts()
   * // 사용자 입력: "3"
   * // returns: "3"
   */
  static async getAttempts() {
    const attempts = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    await InputValidation.validationAttempts(attempts);
    return attempts;
  }
}

export default InputView