import { Console } from "@woowacourse/mission-utils";

async function trialCountInput() {
/**
 * TODO: 
 * 1. 사용자의 입력을 비동기로 입력 받는다
 * 2. 입력받은 문자열을 Number로 변환한다
 * 3. 변환한 입력값의 유효성을 검사한다.
 *  - NaN, 1 미만, decimal, 
 *  - 유효성을 통과하지 못했을 경우 에러를 던진다
 * 4. 유효성을 통과한 정수 값을 반환한다.
 */

  try {
    const USER_INPUT = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const TRIAL_COUNT = Number(USER_INPUT);

    if(Number.isNaN(TRIAL_COUNT)) {
      const ERROR_MESSAGE = '입력하신 값이 숫자가 아닙니다.'
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    if(TRIAL_COUNT < 1) {
      const ERROR_MESSAGE = '입력하신 값이 1보다 작아서 레이스를 진행 할 수 없습니다.'
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }

    if(TRIAL_COUNT !== Math.floor(TRIAL_COUNT) || TRIAL_COUNT !== Math.ceil(TRIAL_COUNT)) {
      const ERROR_MESSAGE = '입력하신 값이 정수가 아닙니다.'
      const ERROR = new Error(ERROR_MESSAGE);
      throw ERROR;
    }
  } catch (error) {
    throw error;
  }
};

export default trialCountInput;