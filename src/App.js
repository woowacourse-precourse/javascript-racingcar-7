import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    // 1. 경주할 자동차 이름 입력
    const CARS = await MissionUtils.Console.readLineAsync('')
    console.log(CARS)
  }
}

export default App;
