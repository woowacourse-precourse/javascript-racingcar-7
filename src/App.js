import { Console, Random } from '@woowacourse/mission-utils';

import { PRINT_MESSAGE } from './constants.js';
import { validateCarNamesInput, validateTryCount } from './validator.js';

class App {
  async run() {
    const carNamesInput = await this.getCarNamesInput();
    validateCarNamesInput(carNamesInput);
    const tryCountInput = await this.getTryCountInput();
    validateTryCount(tryCountInput);

    this.printStartMessage();

    const raceResult = this.getRaceResult(carNamesInput, tryCountInput);
    const winners = this.getWinners(raceResult);

    this.printWinners(winners);
  }

  async getCarNamesInput() {
    const input = await Console.readLineAsync(PRINT_MESSAGE.INPUT_CAR_NAMES);

    return input.replace(/ /g, '');
  }

  async getTryCountInput() {
    const input = await Console.readLineAsync(
      PRINT_MESSAGE.INPUT_MOVE_ATTEMPT_COUNT,
    );

    return input.replace(/ /g, '');
  }

  changeCarNamesInputToCarsData(carNamesInput) {
    const carNames = carNamesInput.split(',');

    return carNames.map((name) => ({ name, position: 0 }));
  }

  getMoveSignal() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  printStartMessage() {
    Console.print(PRINT_MESSAGE.EXECUTION_RESULT);
  }

  printRoundResult(carsData) {
    carsData.forEach((car) => {
      Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    });

    Console.print('');
  }

  printWinners(winners) {
    Console.print(`${PRINT_MESSAGE.WINNERS}${winners.join(', ')}`);
  }

  moveCar(car) {
    car.position += 1;
  }

  getRaceResult(carNames, tryCountInput) {
    const carsData = this.changeCarNamesInputToCarsData(carNames);

    for (let i = 0; i < Number(tryCountInput); i++) {
      this.playRound(carsData);
      this.printRoundResult(carsData);
    }

    return carsData;
  }

  playRound(carsData) {
    carsData.forEach((car) => {
      const canMove = this.getMoveSignal();

      if (canMove) {
        this.moveCar(car);
      }
    });
  }

  getWinners(carsData) {
    const winnersPosition = Math.max(...carsData.map((car) => car.position));

    return carsData
      .filter((car) => winnersPosition === car.position)
      .map((car) => car.name);
  }
}

export default App;
