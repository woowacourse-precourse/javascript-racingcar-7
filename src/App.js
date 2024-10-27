import { Console } from "@woowacourse/mission-utils";
import { shouldMoveForward } from "./Random.js";

class App {
  async run() {
    try {
      const input = await this.getUserInput();
      const winner = PlayGame(carlist, repeat);
      Console.print(`최종 우승자 : ${winner}`);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getUserInput() {
    const carlist = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분).\n"
    );
    const repeat = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return input;
  }
}

export default App;
