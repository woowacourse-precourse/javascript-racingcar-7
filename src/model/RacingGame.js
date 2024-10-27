import Car from "./Car.js";
import Output from "../view/Output.js";

export default class RacingGame {
  repeatCount;

  cars;

  constructor(repeatCount, carNames) {
    this.repeatCount = repeatCount;
    this.cars = RacingGame.formatNamesToCars(carNames);
  }

  static formatNamesToCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  start() {
    Output.printResultTitle();
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.play();
      Output.printResult(this.cars);
      Output.printNewLine();
    }
    Output.printWinners(this.getWinners());
  }

  play() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  getWinners() {
    const maxDist = Math.max(...this.cars.map((car) => car.dist));
    return this.cars.reduce((winners, car) => {
      if (car.dist === maxDist) winners.push(car.name);
      return winners;
    }, []);
  }
}
