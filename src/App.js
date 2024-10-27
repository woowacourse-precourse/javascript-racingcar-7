import { Console } from '@woowacourse/mission-utils';
import RacingCars from './RacingCar.js';

class App {
  carsAndPositions = [];

  async getCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n'
    );
  }

  async getTryCount() {
    return Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  createRacingCar(car) {
    return new RacingCars(car);
  }

  createCarsList(cars) {
    cars.forEach((car) => {
      const racingCar = this.createRacingCar(car);
      this.carsAndPositions.push(racingCar);
    });
  }

  startRacing(userCarInput, tryCount) {
    const cars = userCarInput.split(',');
    this.createCarsList(cars);
  }

  async run() {
    const userCarInput = await this.getCarNames();
    const tryCount = await this.getTryCount();
    this.startRacing(userCarInput, tryCount);
  }
}

export default App;
