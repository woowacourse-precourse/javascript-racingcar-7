import { Console, Random } from "@woowacourse/mission-utils"
import InputView from "./InputView.js"
import Car from "./Car.js";
import { RESULT_STATUS } from "./constant.js";
class App {
  constructor() {
    this.cars = [];
    this.countInput = 0;
  }
  async run() {
    const carInput = await InputView.CarNameInput();
    this.countInput = await InputView.CountInput();
    this.cars = carInput.map((name) => new Car(name));
    this.getForwardPrint();
    this.WinnerCheck();
  }
  getForwardPrint() {
    Console.print(RESULT_STATUS.PROGRESS);
    for (let i = 0; i < this.countInput; i++) {
      this.cars.forEach((car, _) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.MoveForward(randomNumber);
        Console.print(car.getPosition());
      })
      Console.print('');
    }
  }
  WinnerCheck() {
    const MAX = Math.max(...this.cars.map((car) => car.getForwardCount()));
    const winners = this.cars
      .filter((car) => car.getForwardCount() === MAX)
      .map((car) => car.name)
      .join(', ');
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
