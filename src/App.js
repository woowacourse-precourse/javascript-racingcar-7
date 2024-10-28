import { MissionUtils } from "@woowacourse/mission-utils";
import splitInput from "./splitInput.js"

class App {
  async run() {
    const INPUT = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const CARNAMES = splitInput(INPUT);
    
    // MissionUtils.Console.print(CARNAMES);
  }
}

export default App;
