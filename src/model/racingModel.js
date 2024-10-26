class RacingModel {
  constructor() {
    this.car = {};
    this.count;
  }

  setCar(car, result) {
    this.car[car] = result;
  }

  setCount(count) {
    this.count = count;
  }
}
export default RacingModel;
