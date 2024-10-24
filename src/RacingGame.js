import Car from "./Car";

export default class RacingGame {
  repeatCount;

  cars;

  constructor(repeatCount, cars) {
    this.repeatCount = repeatCount;
    this.cars = RacingGame.formatStringToCars(cars);
  }

  static formatStringToCars(carString) {
    const cars = {};
    carString.split(",").forEach((name) => {
      cars[name] = new Car(name);
    });
    return cars;
  }

  start() {
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.play();
    }
  }

  play() {
    Object.keys(this.cars).forEach((name) => {
      this.cars[name].move();
    });
  }

  getWinners() {
    const maxDist = Math.max(...Object.values(this.cars).map((car) => car.dist));
    return Object.keys(this.cars).filter((name) => this.cars[name].dist === maxDist);
  }
}
