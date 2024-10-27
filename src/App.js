import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {

    const carNames = await this.getInput("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ");
    const position = await this.getInput("시도할 횟수를 입력하세요: ");
    
  }

  async getInput(promptText) {
    return MissionUtils.Console.readLineAsync(promptText);
  }

}

export default App;
