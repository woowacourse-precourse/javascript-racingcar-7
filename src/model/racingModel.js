class RacingModel {
  constructor(carNames, count) {
    this.cars = carNames.map((name) => new CarModel(name));
    this.count = count;
  }
}
export default RacingModel;
