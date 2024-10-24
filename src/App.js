import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";

class App {
  cars = [];

  async run() {
    try {
      await carNames();
      const attempt = await this.attempts();

    }
    catch {

    }
  }
  
  async carNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const names = input.split(',');
    this.cars = names.map(name => new Car(name));
  }

  async attempts() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const attempt = Number(input);
    if (isNaN(attempt) || attempt <= 0) {
      throw new Error("[ERROR] 유효하지 않은 시도 횟수입니다.")
    }
  }


}

export default App;
