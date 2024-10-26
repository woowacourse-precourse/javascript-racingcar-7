class RacingCalc {
  constructor(carName) {
    this.carArr = carName;
    this.moveCntArr = new Array(this.carArr.length).fill(0);
  }
}

export default RacingCalc;
