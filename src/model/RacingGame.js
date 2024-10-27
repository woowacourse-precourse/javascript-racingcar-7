import Car from "./Car.js";
import Output from "../view/Output.js";

export default class RacingGame {
  repeatCount;

  cars;

  constructor() {
    this.cars = [];
    this.repeatCount = 0;
  }

  static formatNamesToCars(carNames) {
    return carNames.map((name) => new Car(name));
  }

  setGame(carNames, repeatCount) {
    this.cars = RacingGame.formatNamesToCars(carNames);
    this.repeatCount = repeatCount;
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
