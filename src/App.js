import { Console } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGE = {
    CAR_NAME_LENGTH_ERROR:
      '차량 이름이 너무 깁니다! 각 차량 이름은 5글자 이하로 입력해주세요!',
    ATTEMPT_COUNT_ERROR: '올바른 숫자를 입력해주세요!',
    ATTEMPT_COUNT_MINIMUM_ERROR: '1이상의 숫자를 입력해주세요!',
  };

  async run() {
    const cars = await this.inputCars();
    const attemptCount = await this.inputAttemptCount();
  }

  async input(msg) {
    const input = await Console.readLineAsync(`${msg}\n`);
    return input;
  }

  async inputAttemptCount() {
    const attemptCountInput = await this.input('시도할 횟수는 몇 회인가요?');
    return this.parseAttemptCount(attemptCountInput);
  }

  parseAttemptCount(attemptCountInput) {
    const attemptCount = Number(attemptCountInput);
    this.validateAttemptCount(attemptCount);
    return attemptCount;
  }

  validateAttemptCount(attemptCount) {
    if (Number.isNaN(attemptCount)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.ATTEMPT_COUNT_ERROR}`);
    }
    if (attemptCount < 1) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.ATTEMPT_COUNT_MINIMUM_ERROR}`);
    }
  }

  async inputCars() {
    const carsInput = await this.input(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
    const cars = this.separateCar(carsInput);
    this.validateCarNames(cars);
    return cars;
  }

  validateCarNames(cars) {
    if (!this.isCarNameValid(cars)) {
      throw Error(`[ERROR] ${App.ERROR_MESSAGE.CAR_NAME_LENGTH_ERROR}`);
    }
  }

  separateCar(cars) {
    return cars.split(',');
  }

  isCarNameValid(cars) {
    return cars.every(car => car.length <= 5);
  }
}

export default App;
