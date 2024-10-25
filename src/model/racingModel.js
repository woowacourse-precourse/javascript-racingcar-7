class RacingModel {
  constructor() {
    this.cars = [];
    this.count;
  }

  addCars(cars) {
    this.cars = [...cars];
  }

  setCount(count) {
    this.count = count;
  }
}
export default RacingModel;
