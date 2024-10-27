class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  tryMove(randomNumber) {
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  getPosition() {
    return `${this.name} : ${'-'.repeat(this.position)}`;
  }
}
export default RacingCar;
