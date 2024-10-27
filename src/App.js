import { MissionUtils } from '@woowacourse/mission-utils';

class CarRacing {
  #cars;
  #carsMap;
  #numberOfTry;
  #racingResult = '';

  constructor(cars, numberOfTry) {
    this.#cars = cars;
    this.#numberOfTry = numberOfTry;
    this.#carsMap = new Map(cars.map((name) => [name, '']));
  }

  race() {
    this.#executeRacing();
    this.#printResult();
    this.#announceWinner();
  }

  #executeRacing() {
    for (let i = 0; i < this.#numberOfTry; i++) {
      this.#processOneRound();
    }
  }

  #processOneRound() {
    this.#updateRacingStatus();
    this.#updateRacingResult();
  }

  #updateRacingStatus() {
    this.#cars.forEach((name) => {
      if (this.#shouldMoveForward()) {
        this.#carsMap.set(
          name,
          this.#carsMap.get(name) + '-'
        );
      }
    });
  }

  #shouldMoveForward() {
    return MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
  }

  #updateRacingResult() {
    this.#carsMap.forEach((value, key) => {
      this.#racingResult += `${key} : ${value}\n`;
    });
    this.#racingResult += '\n';
  }

  #printResult() {
    const Console = MissionUtils.Console;
    Console.print(this.#numberOfTry);
    Console.print('실행 결과');
    Console.print(this.#racingResult);
  }

  #announceWinner() {
    const fastestDistance = this.#getFastestDistance();
    const winners = this.#getWinners(fastestDistance);
    MissionUtils.Console.print(
      `최종 우승자 : ${winners.toString()}`
    );
  }

  #getFastestDistance() {
    return Math.max(
      ...[...this.#carsMap.values()].map((v) => v.length)
    );
  }

  #getWinners(fastestDistance) {
    const winners = [];
    this.#carsMap.forEach((v, k) => {
      if (v === '-'.repeat(fastestDistance)) {
        winners.push(k);
      }
    });
    return winners;
  }
}

class InputValidator {
  static validateCarNames(inputNames) {
    const cars = this.#parseCarNames(inputNames);
    this.#validateInput(inputNames, cars);
    return cars;
  }

  static #parseCarNames(inputNames) {
    return inputNames
      .split(',')
      .filter((name) => name !== '')
      .map((name) => name.trim());
  }

  static #validateInput(inputNames, cars) {
    if (inputNames === '') {
      throw Error('자동차 이름을 입력해주세요.');
    }
    this.#validateCarNamesLength(cars);
    this.#validateNoDuplicates(cars);
  }

  static #validateCarNamesLength(cars) {
    cars.forEach((name) => {
      if (name.length > 5) {
        throw Error('자동차 이름은 5자 이하만 가능합니다.');
      }
    });
  }

  static #validateNoDuplicates(cars) {
    if (cars.length !== new Set(cars).size) {
      throw Error(
        '중복되지 않은 자동차 이름을 입력해주세요.'
      );
    }
  }

  static validateNumberOfTry(input) {
    const numberOfTry = Number(input);
    this.#validateNumber(numberOfTry);
    return numberOfTry;
  }

  static #validateNumber(numberOfTry) {
    if (!numberOfTry) {
      throw Error('횟수는 숫자로 입력해주세요.');
    }
    if (numberOfTry > 100) {
      throw Error('실행 횟수는 100회 이하로 입력해주세요.');
    }
    if (numberOfTry <= 0) {
      throw Error('실행 횟수는 1회 이상 입력해주세요.');
    }
  }
}

class App {
  async run() {
    try {
      const cars = await this.#getCarsInput();
      const numberOfTry = await this.#getNumberOfTryInput();

      const racing = new CarRacing(cars, numberOfTry);
      racing.race();
    } catch (error) {
      throw Error('[ERROR]' + error.message);
    }
  }

  async #getCarsInput() {
    const inputNames =
      await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
      );
    return InputValidator.validateCarNames(inputNames);
  }

  async #getNumberOfTryInput() {
    const input = await MissionUtils.Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?'
    );
    return InputValidator.validateNumberOfTry(input);
  }
}

export default App;
