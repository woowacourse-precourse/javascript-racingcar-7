import CarModel from './carModel.js';

class RacingModel {
  constructor(carNames, count) {
    this.cars = carNames.map((name) => new CarModel(name));
    this.count = count;
  }

  race() {
    this.cars.forEach((element) => element.move());
  }

  getWinners() {
    // 가장 먼 위치값을 추출해 해당 값과 알맞는 요소들을 배열로 반환한다.
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }

  getCars() {
    return this.cars;
  }
}
export default RacingModel;
