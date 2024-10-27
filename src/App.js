import { Console, Random } from '@woowacourse/mission-utils';

class App {
  #MIN_RANDOM_NUMBER = 4;
  #MAX_CAR_NAME_LENGTH = 5;

  async #getCarNames() {
    const input = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    if (!this.#validateCarNames(input)) {
      throw new Error(`[ERROR] 잘못된 입력값 입니다. : ${input}`);
    }

    return input.split(',');
  }

  #validateCarNames(input) {
    if (!input) {
      return false;
    }

    const isCommaSeparated = /^(\w+)(,\w+)*$/.test(input);

    const carNames = input.split(',');

    const validateCarNamesLength = carNames.every((carName) => carName.length <= this.#MAX_CAR_NAME_LENGTH);

    return isCommaSeparated && validateCarNamesLength;
  }

  async #getAttemptCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    const attemptCount = parseInt(input);

    if (!attemptCount || Number.isNaN(attemptCount)) {
      throw new Error(`[ERROR] 잘못된 형식의 입력값입니다. : ${input}`);
    }

    return attemptCount;
  }

  async #printAttemptResults(carNames, cars, n) {
    let result = '\n실행 결과\n';

    for (let i = 0; i < n; i++) {
      const attemptResults = carNames.map((carName) => {
        const randomNumber = Random.pickNumberInRange(0, 9);

        if (randomNumber >= this.#MIN_RANDOM_NUMBER) {
          cars[carName] += randomNumber;
        }

        return `${carName} : ${'-'.repeat(randomNumber)}`;
      });

      result += attemptResults.join('\n') + '\n\n';
    }

    Console.print(result.trim() + '\n');
  }

  async #calculateScores(carNames, n) {
    const cars = {};

    carNames.forEach((car) => (cars[car] = 0));

    await this.#printAttemptResults(carNames, cars, n);

    return cars;
  }

  #getWinners(cars) {
    const maxScore = Math.max(...Object.values(cars));

    return Object.keys(cars).filter((car) => cars[car] === maxScore);
  }

  async run() {
    const carNames = await this.#getCarNames();
    const attemptCount = await this.#getAttemptCount();
    const scores = await this.#calculateScores(carNames, attemptCount);
    const winners = this.#getWinners(scores);

    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
