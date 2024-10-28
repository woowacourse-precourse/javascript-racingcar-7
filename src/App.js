import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    async function getCarNames() {
      try {
        const CARS_NAME = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n");
        MissionUtils.Console.print(`${CARS_NAME}`);
        const CARS_NAME_ARR = CARS_NAME.split(",");
        return CARS_NAME_ARR
      } catch (error) {
        console.error('[ERROR]');
      }
    }
    getCarNames()
  }
}

export default App;
