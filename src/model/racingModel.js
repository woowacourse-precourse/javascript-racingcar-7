class RacingModel {
  constructor(carNames, count) {
    this.cars = carNames.map((name) => new CarModel(name));
    this.count = count;
  }

  rece() {
    this.cars.forEach((element) => element.move());
  }
}
export default RacingModel;
