import { Console } from "@woowacourse/mission-utils";
import InputHandler from "./InputHandler.js";
import Car from "./Car.js";

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.cars = [];
  }

  async run() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)\n"
    );

    const attempts = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const parsedCarNames = this.inputHandler.parseCarNames(carNames);
    const parsedAttempts = this.inputHandler.parseAttempts(attempts);

    this.cars = parsedCarNames.map((name) => new Car(name));

    // 제대로 작동하는지 확인
    this.cars.forEach((car) => {
      car.move();
      car.getPosition();
      car.getName();
    });
    Console.print(this.cars);
  }
}

export default App;
