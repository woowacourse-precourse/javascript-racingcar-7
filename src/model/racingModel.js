class RacingModel {
  constructor() {
    this.car = {};
    this.count;
  }

  updateCar(car) {
    this.car = { ...this.car, ...car };
  }

  getCount(count) {
    this.count = count;
  }
}
export default RacingModel;
