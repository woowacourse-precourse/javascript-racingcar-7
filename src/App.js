import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    function vaildateCarNames(carNames) {
      if(!carNames.trim()) {
        throw new Error('자동차 이름을 입력해주세요.');
      }
      const CAR_NAME_ARRAY = CAR_NAMES.split(",").map(name => name.trim());
      CAR_NAME_ARRAY.forEach(name => {
        if(name.length > 5) {
          throw new Error('자동차 이름은 5자 이하만 가능합니다.');
        }
      })
      return CAR_NAME_ARRAY;
    }

    function vaildateTryCount(tryCount) {
      if(isNaN(tryCount) || tryCount.trim() === '') {
        throw new Error('올바른 값을 입력해주새요');
      }
      return parseInt(tryCount);
    }

    async function getCarNames() {
        const CAR_NAME = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
        return vaildateCarNames(CAR_NAME);
    }
    async function getTryCount() {
        const TRY_COUNT = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        return vaildateTryCount(TRY_COUNT);
    }

    try {

    } catch (error) {

    }
  }
}

export default App;
