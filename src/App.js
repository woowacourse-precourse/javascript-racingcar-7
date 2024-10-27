import { readInput, print } from './util/console.js';
import {
  isValidDelimiter,
  isValidCarNameLength,
  isCarNameDuplicated,
  isValidTryCount,
} from './util/validation.js';
import Car from './model/Car.js';
import { CONSOLE_OPTIONS } from './constant/option.js';

export default class App {
  #carList;
  #tryCount;

  async run() {
    const carNames = await readInput(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
      [isValidDelimiter, isValidCarNameLength, isCarNameDuplicated]
    );
    const tryCount = await readInput('시도할 횟수는 몇 회인가요?\n', [
      isValidTryCount,
    ]);

    this.#parse(carNames, tryCount);
  }

  #parse(carNames, tryCount) {
    this.#carList = carNames
      .split(CONSOLE_OPTIONS.CAR_NAME_DELIMITER)
      .map((name) => new Car(name));
    this.#tryCount = Number(tryCount);
    this.#race();
  }

  #race() {
    print('실행 결과');

    for (let i = 0; i < this.#tryCount; i += 1) {
      const result = this.#move();

      if (i === this.#tryCount - 1) {
        this.#printRaceResult(result);
      }
    }
  }

  #move() {
    const moveResults = this.#carList.map((car) => car.move());

    return this.#printMoveResult(moveResults);
  }

  #printMoveResult(moveResults) {
    moveResults.forEach((car) => {
      print(
        `${car.name} : ${CONSOLE_OPTIONS.CAR_MOVE_INDICATOR.repeat(car.move)}`
      );
    });
    print();

    return moveResults;
  }

  #printRaceResult(raceResult) {
    const maxMove = Math.max(...raceResult.map((car) => car.move));
    const winner = raceResult
      .filter((car) => car.move === maxMove)
      .map((car) => car.name);

    print(`최종 우승자 : ${winner.join(', ')}`);
  }
}
