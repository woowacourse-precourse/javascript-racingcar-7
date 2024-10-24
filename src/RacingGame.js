export default class RacingGame {
  repeatCount;

  constructor(repeatCount) {
    this.repeatCount = repeatCount;
  }

  start() {
    for (let i = 0; i < this.repeatCount; i += 1) {
      this.play();
    }
  }

  play() {}
}
