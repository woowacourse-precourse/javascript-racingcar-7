import { Console } from "@woowacourse/mission-utils";
import Validate from "./Validate.js";
import Race from "./Race.js";
import Winner from "./Winner.js";

class App {
  async run() {
    try {
      const carNames = await this.getCarNames();
      const maxAttempts = await this.getAttempts();

      const cars = carNames.map(name => ({ name, position: 0 }));

      Console.print("\n경기 시작!");
      Race.startRace(maxAttempts, cars);

      const winners = Winner.determineWinners(cars);
      Winner.announceWinners(winners);
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async getCarNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요 (쉼표로 구분): ");
    return Validate.validateCarNames(input);
  }

  async getAttempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?: ");
    return Validate.validateAttempts(input);
  }
}

export default App;
