import Car from './Car.js';
import generateRandomNumber from './GenerateRandomNumber.js';
import Output from '../io/Output.js';

class CarController {
  constructor(carNames) {
    this.cars = [];
    this.createCar(carNames);
  }

  //차 이름 목록으로 차 객체들을 생성한다.
  createCar(carNames) {
    carNames.forEach((name) => this.cars.push(new Car(name)));
  }

  // 생성한 랜덤넘버를 바탕으로 차의 위치를 움직인다
  updateCarPosition() {
    this.cars.forEach((car) => car.moveForward(generateRandomNumber()));
  }

  printResult() {
    this.cars.forEach((car) => Output.printResult(car.name, car.generateRaceMarker()));
    Output.printNewLine();
  }
}
export default CarController;
