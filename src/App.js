import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 사용자 입력 받기 
    const inputCarName = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    // 사용자 입력 유효검사에 따른 에러처리
    try {
      this.validCarName(inputCarName);

      const carNameList = inputCarName.split(",");
      const carStepList = Array(carNameList.length).fill(0);

      const inputTryCount = await Console.readLineAsync(
        '시도할 횟수는 몇 회 인가요?\n'
      )
      this.validTryCount(inputTryCount);

    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }

  // 입력받은 자동차 이름 유효검사
  validCarName(inputCarName) {
    if(!inputCarName){
      throw new Error('자동차 이름을 입력해주세요');
    }
    if(inputCarName.length > 5){
      throw new Error('5자 이하로 작성해주세요')
    }
  }

  // 입력받은 시도 횟수 유효검사
  validTryCount(inputTryCount) {
    if(!inputTryCount || inputTryCount.length === 0){
      throw new Error('시도할 횟수를 입력해주세요');
    }
    if(isNaN(inputTryCount) === true) {
      throw new Error('숫자만 입력해주세요');
    }
    if(inputTryCount < 0) {
      throw new Error('양수만 입력해주세요');
    }
  }

}

export default App;