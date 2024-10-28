class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = '';
  }

  get showResult() {
    return `${this.name} : ${this.position}`;
  }

  moveForward() {
    this.position = this.position + '-';
  }
}

export default RacingCar;
