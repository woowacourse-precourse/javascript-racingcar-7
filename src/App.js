import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  splitName(carNames) {
    return carNames.split(',');
  }

  async run() {
    const CAR_NAMES = MissionUtils.Console.readLineAsync();
    const SPLIT_CAR_NAMES = splitName(CAR_NAMES);
  }
}

export default App;
