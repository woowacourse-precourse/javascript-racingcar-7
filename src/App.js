import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.position += 1;
    }
  }

  showPosition() {
    Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }
}

class App {
  async run() {
    const CAR_NAMES_INPUT = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (!CAR_NAMES_INPUT) {
      Console.print('[ERROR] 자동차 이름을 입력해주세요.');
      throw new Error('[ERROR] 자동차 이름을 입력해주세요.');
    }

    const CAR_NAMES = CAR_NAMES_INPUT.split(',');

    CAR_NAMES.forEach((car) => {
      if (car.length > 5 || car.length === 0) {
        Console.print('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
        throw new Error('[ERROR] 자동차 이름은 5자 이하여야 합니다.');
      }
    });

    const TRY_COUNT = await Console.readLineAsync(
      '시도할 횟수는 몇회인가요?\n'
    );

    if (!TRY_COUNT) {
      Console.print('[ERROR] 시도 횟수를 입력해주세요.');
      throw new Error('[ERROR] 시도 횟수를 입력해주세요.');
    }

    if (Number.isNaN(Number(TRY_COUNT))) {
      Console.print('[ERROR] 시도 횟수는 숫자여야 합니다.');
      throw new Error('[ERROR] 시도 횟수는 숫자여야 합니다.');
    }

    Console.print(`실행 결과`);

    const RESULT = this.startRace(CAR_NAMES, Number(TRY_COUNT));

    Console.print(`최종 우승자 : ${RESULT.join(', ')}`);
  }

  startRace(CAR_NAMES, TRY_COUNT) {
    Console.print(`실행 결과`);

    const CARS = CAR_NAMES.map((name) => new Car(name));

    for (let i = 0; i < TRY_COUNT; i++) {
      this.runRound(CARS);
    }

    return this.getWinners(CARS);
  }

  runRound(CARS) {
    CARS.forEach((car) => car.move());
    CARS.forEach((car) => car.showPosition());
    Console.print('\n');
  }

  getWinners(CARS) {
    const WINNERS = CARS.filter(
      (car) => car.position === Math.max(...CARS.map((car) => car.position))
    );

    return WINNERS.map((winner) => winner.name);
  }
}

export default App;
