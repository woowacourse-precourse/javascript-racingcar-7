class RacingModel {
  constructor() {
    this.car = {};
    this.count;
  }

  updateCar(car) {
    this.car = { ...this.car, ...car };
  }

  setCount(count) {
    this.count = count;
  }

  addresult(carName) {
    this.car[carName] += '-';
  }
}
export default RacingModel;
