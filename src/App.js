import { MissionUtils } from "@woowacourse/mission-utils";
import Race from "./Race.js";

class App {
  async run() {
    try {
      const input = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
      const tries = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

      const race = new Race(input, tries)
      race.start()
      race.logWinners()

    } catch (error) {
      MissionUtils.Console.print(error.message);
      throw error
    }
  }
}

export default App;
