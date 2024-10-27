import { Console } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGE = {
    CAR_NAME_LENGTH_ERROR:
      '차량 이름이 너무 깁니다! 각 차량 이름은 5글자 이하로 입력해주세요!',
  };

  async run() {
    const cars = this.inputCars();
  }

  async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }

  async inputCars() {
    const carsInput = await this.input(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const cars = this.separateCar(carsInput);

    if (!this.isCarNameValid(cars)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR}`);
    }

    return cars;
  }

  separateCar(cars) {
    return cars.split(',');
  }

  isCarNameValid(cars) {
    return cars.every(car => car.length <= 5);
  }
}

export default App;
