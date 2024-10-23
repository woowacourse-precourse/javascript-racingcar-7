import { Console } from "@woowacourse/mission-utils";
import Car from "./Car";

class App {
  cars = [];

  async run() {
    try {
      await carNames();
    }
    catch {

    }
  }
  
  async carNames() {
    const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const names = input.split(',');
    this.cars = names.map(name => new Car(name));
  }
}

export default App;
