import { Console } from '@woowacourse/mission-utils';
import { readUserInput } from '../utils/readUserInput.js';
import Car from './Car.js';
import {
  isCarNames,
  isPositiveNumber,
  isUniqueCarNames,
} from '../utils/validators.js';

const CONSOLE_MESSAGE = {
  INPUT_CAR_NAMES: (delimiter) =>
    `경주할 자동차 이름을 입력하세요.(이름은 ${delimiter} 기준으로 구분)`,
  INPUT_TRY_NUMBERS: '시도할 횟수는 몇 회인가요?',
  RACE_START: '실행 결과',
  RACE_WINNERS: (winners) => `최종 우승자 : ${winners}`,
};

export default class Race {
  #cars;
  #tryNumber;
  #delimiter;
  #indicator;

  constructor(delimiter = ',', indicator = '-') {
    this.#delimiter = delimiter;
    this.#indicator = indicator;
  }

  async #readRaceInput() {
    const carNames = await readUserInput(
      CONSOLE_MESSAGE.INPUT_CAR_NAMES(this.#delimiter),
      [
        (str) => isCarNames(str, this.#delimiter),
        (str) => isUniqueCarNames(str, this.#delimiter),
      ]
    );
    const tryNumber = await readUserInput(CONSOLE_MESSAGE.INPUT_TRY_NUMBERS, [
      isPositiveNumber,
    ]);

    return [carNames, tryNumber];
  }

  #printRaceCar(name, position) {
    Console.print(`${name} : ${this.#indicator.repeat(position)}`);
  }

  async ready() {
    const [carNames, tryNumber] = await this.#readRaceInput();

    this.#tryNumber = tryNumber;
    this.#cars = carNames.split(this.#delimiter).map((name) => new Car(name));
  }

  start() {
    Console.print(CONSOLE_MESSAGE.RACE_START);
    for (let turn = 0; turn < this.#tryNumber; turn++) {
      this.#cars.forEach((car) => {
        this.#printRaceCar(car.getName(), car.move());
      });
      Console.print('');
    }
  }

  printWinners() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars
      .filter((car) => car.getPosition() === maxDistance)
      .map((car) => car.getName())
      .join(', ');

    Console.print(CONSOLE_MESSAGE.RACE_WINNERS(winners));
  }
}
