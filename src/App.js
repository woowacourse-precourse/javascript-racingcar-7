import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async run() {
    const inputCar = await this.getInputCarNames();
    const inputCount = await this.getInputCount();

    let cars = this.initializeCars(inputCar);
    Console.print('\n실행 결과');

    for (let count = 0; count < inputCount; count++) {
      this.runRace(cars);
      this.printRaceStatus(cars);
      Console.print('');
    }

    this.printWinners(cars);
  }

  async getInputCarNames() {
    const inputCar = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!inputCar || inputCar.trim() === '') {
      throw new Error('[ERROR] 자동차 이름은 비어있을 수 없습니다.');
    }
    return inputCar;
  }

  async getInputCount() {
    const inputCount = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    const parsedCount = Number(inputCount);
    if (isNaN(parsedCount) || parsedCount <= 0) {
      throw new Error('[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다.');
    }
    return parsedCount;
  }

  initializeCars(inputCar) {
    let cars = {};
    const carNames = inputCar.split(',').map((car) => car.trim());
    carNames.forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
      }
      if (car === '') {
        throw new Error('[ERROR] 자동차 이름은 공백일 수 없습니다.');
      }
      if (cars.hasOwnProperty(car)) {
        throw new Error(
          `[ERROR] 자동차 이름은 중복될 수 없습니다. 중복된 이름: ${car}`
        );
      }
      cars[car] = 0;
    });
    return cars;
  }

  runRace(cars) {
    Object.keys(cars).forEach((car) => {
      let randomValue = Random.pickNumberInRange(0, 9);
      if (randomValue >= 4) {
        cars[car] += 1;
      }
    });
  }

  printRaceStatus(cars) {
    Object.keys(cars).forEach((car) => {
      Console.print(`${car} : ${'-'.repeat(cars[car])}`);
    });
  }

  printWinners(cars) {
    const maxDistance = Math.max(...Object.values(cars));
    const winners = Object.keys(cars).filter(
      (car) => cars[car] === maxDistance
    );
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
