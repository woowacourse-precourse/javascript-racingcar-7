import { Console, Random } from "@woowacourse/mission-utils";
import Car from "./Car.js"

class App {
  async run() {
    // 사용자 입력 구현
    const carNames = await this.getCarNames();
    const attempts = await this.getAttempts();

  }

  async getCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)로 구분)\n");
    const names = input.split(",").map((name) => name.trim());

    return names;
  }

  async getAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attempts = Number(input);

    return attempts;
  }
}

export default App;
