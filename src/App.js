import { MissionUtils } from "@woowacourse/mission-utils";
import Race from './Race.js';

class App {
  async run() {

    try {
    const carNames = await this.getInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
    const position = await this.getInput("시도할 횟수를 입력하세요: ");
    
      const race = new Race(carNames, parseInt(position, 10));
      race.showResult();
    } catch (error) {
      MissionUtils.Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  async getInput(promptText) {
    return MissionUtils.Console.readLineAsync(promptText);
  }

}

export default App;
