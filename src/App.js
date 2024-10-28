import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    async function getCarNames() {
      try {
        const CARS_NAME = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
        const CARS_NAME_ARR = CARS_NAME.split(",");
        return CARS_NAME_ARR
      } catch (error) {
        console.error('[ERROR]');
      }
    }

    async function getTryCount() {
      try {
        const TRY_COUNT = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        MissionUtils.Console.print(`시도할 횟수: ${TRY_COUNT}`);
        return parseInt(TRY_COUNT);
      } catch (error) {
        console.error('[ERROR]');
      }
    }
    await getCarNames()
    await getTryCount()
  }
}

export default App;
