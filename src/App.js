import { Console, Random } from '@woowacourse/mission-utils';

class App {
  static ERROR_MESSAGE = {
    CAR_NAME_LENGTH_ERROR:
      '차량 이름 길이가 잘못되었습니다! 각 차량 이름은 1글자 이상 5글자 이하로 입력해주세요!',
    ATTEMPT_COUNT_ERROR: '올바른 숫자를 입력해주세요!',
    ATTEMPT_COUNT_MINIMUM_ERROR: '1이상의 숫자를 입력해주세요!',
  };

  static MOVEABLE_NUMBER = 4;

  async run() {
    const cars = await this.inputCars();
    const attemptCount = await this.inputAttemptCount();
    this.runRaceRounds(cars, attemptCount);
    this.printWinner(cars);
  }

  printWinner(cars) {
    const winner = this.getRaceWinner(cars);
    Console.print(`최종 우승자 : ${winner.map(car => car.name).join(', ')}`);
  }

  getRaceWinner(cars) {
    const maxCount = Math.max(...cars.map(car => car.move));
    const winner = cars.filter(car => car.move === maxCount);
    return winner;
  }

  runRaceRounds(cars, attemptCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < attemptCount; i += 1) {
      this.moveCar(cars);
      this.printCarProgress(cars);
    }
  }

  printCarProgress(cars) {
    cars.forEach(car => Console.print(`${car.name} : ${'-'.repeat(car.move)}`));
    Console.print('');
  }

  isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= App.MOVEABLE_NUMBER;
  }

  attemptMove(car) {
    if (this.isCarMovable()) {
      car.move += 1;
    }
  }

  moveCar(cars) {
    cars.forEach(car => this.attemptMove(car));
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
    return cars.split(',').map(car => ({ name: car, move: 0 }));
  }

  isCarNameValid(cars) {
    return cars.every(car => car.name.length > 0 && car.name.length <= 5);
  }
}

export default App;
