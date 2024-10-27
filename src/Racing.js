import { Console } from "@woowacourse/mission-utils";
import Car from './Car.js';
import Validate from './Validate.js';

class Racing {
  constructor(inputCarName, inputAttempts) {
    this.car = Validate.validateCar(inputCarName);
    this.attempts = Validate.validateAttempts(inputAttempts);
  }

  runGame() {
    Console.print('실행결과');
    for (let i = 0; i < inputAttempts; i++) {
      this.showResult();
      Console.print("");
    }
  }
  showResult() {
    this.car.forEach(car => {
      car.move();
      Console.print(`${car.name} : ${car.position}`);
    });
  }

}