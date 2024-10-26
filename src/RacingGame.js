import Car from "./Car";
import Output from "./Output";

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
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.play();
      Output.printResult(this.cars);
    }
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
