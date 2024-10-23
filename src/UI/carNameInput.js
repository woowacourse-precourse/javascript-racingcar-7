import { Console } from "@woowacourse/mission-utils"

async function carNameInput() {
  /**
   * TODO: 
   * 1. 사용자의 입력을 비동기로 입력받고 변수에 저장한다
   * 2. 변수의 문자열을 쉼표로(,) split해서 배열로 변환한다
   * 3. 배열로 변환된 값의 각 요소의 유효성을 검사한다
   *  - 5자 이하인 값인지 검사한다
   *  - 유효성을 통과하지 못했을 경우 에러를 반환한다
   * 4. 유효성을 통과한 값의 배열을 반환한다
   */
  try {
    const USER_INPUT = Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const CAR_NAME = USER_INPUT.split(',');
  
    CAR_NAME.forEach((name) => {
      if(name.length > 6) {
        const OVER_FIVE_CHARACTOR = '자동차 이름이 5글자를 초과 합니다.';
        const ERROR = new Error(OVER_FIVE_CHARACTOR);
        throw ERROR;
      }
    });
  
    return CAR_NAME;
  } catch (error) {
    throw error;
  }
}