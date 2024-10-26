import Car from './Car.js';

class CarController {
  constructor(carNames) {
    this.cars = [];
    this.createCar(carNames);
  }

  //차 이름 목록으로 차 객체들을 생성한다.
  createCar(carNames) {
    carNames.forEach((name) => this.cars.push(new Car(name)));
  }
}
export default CarController;
