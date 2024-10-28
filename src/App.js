import { Console } from "@woowacourse/mission-utils";
class App {
  INPUT_CAR_NAME =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  INPUT_TRY_COUNT = "시도할 회수는 몇회인가요?\n";

  async getUserInput(message) {
    return await Console.readLineAsync(message);
  }
  async showInput(message) {
    return await Console.print(message);
  }

  async run() {
    const names = await this.getUserInput(this.INPUT_CAR_NAME);
    const tryCount = await this.getUserInput(this.INPUT_TRY_COUNT);
  }
}

export default App;
