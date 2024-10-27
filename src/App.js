import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const CARS_INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n");
    //const TRY_INPUT = await MissionUtils.Console.readLineAsync("시도할 횟수\n");
    const carList = CARS_INPUT.split(',');

  }
}

export default App;
