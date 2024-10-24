export default class RacingGame {
  repeatCount;

  cars;

  constructor(repeatCount, cars) {
    this.repeatCount = repeatCount;
    this.cars = cars;
  }

  start() {
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.play();
    }
  }

  play() {}
}
