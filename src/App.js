import { MissionUtils } from "@woowacourse/mission-utils";
import splitInput from "./splitInput.js"
import validNumber from "./validNumber.js";

class App {
  async run() {
    // 1. 자동차 이름 입력 처리
    const INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const CARNAMES = splitInput(INPUT);
    
    // 2. 이동 거리 처리
      const NUMINPUT = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const TIMES = validNumber(NUMINPUT);
    // MissionUtils.Console.print(CARNAMES);
  }
}

export default App;
