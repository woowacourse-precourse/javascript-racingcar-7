import Car from "./models/Car";
import Race from "./models/Race";

class App {
  async run() {
    try {
      Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
      const carNames = await Console.readLineAsync("");
      const cars = carNames.split(',');

      Console.print('시도할 횟수는 몇 회인가요?');
      const numOfAttempts = await Console.readLineAsync("");

    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
    }
  }
}

export default App;
