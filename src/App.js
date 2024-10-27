import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const playerNames = await this.getPlayerNames();
    const trials = await this.getTrials();

    console.log(playerNames);
    console.log(trials);
  }

  async getPlayerNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
    const names = input.split(",");

    return names;
  }

  async getTrials() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    return input;
  }
}

export default App;
