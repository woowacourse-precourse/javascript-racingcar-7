import { Console } from "@woowacourse/mission-utils";
import Car from './Car.js'

class Racing {
  constructor(inputCarName, inputAttempts) {
    this.car = inputCarName.map((name) => new Car(name));
    this.attempts = inputAttempts;
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
  showWinner() {
    const maxPosition = Math.max(
      ...this.car.map((car) => car.position.length)
    );
    const winner = this.car
      .filter((car) => car.position.length === maxPosition)
      .map((car) => car.name)
      .join(', ');

    Console.print(`최종 우승자 : ${winner}`)
  }
}
export default Racing;