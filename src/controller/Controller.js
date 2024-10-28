import { Console } from '@woowacourse/mission-utils';
import ERROR_MESSAGES from '../constants/ErrorMessage.js';
import { Car } from '../model/Car.js';
import { Race } from '../model/Race.js';
import { View } from '../view/View.js';

export class Controller {
  constructor() {
    this.view = new View();
    this.race = new Race();
  }

  async start() {
    const carNames = await this.view.promptCarNames();
    this.validateCarNames(carNames);

    carNames.forEach((name) => {
      this.race.addCar(new Car(name));
    });

    const attempt = await this.view.promptAttempt();
    this.validateAttempt(attempt);

    Console.print('실행결과');
    for (let i = 0; i < attempt; i++) {
      this.race.play();
      this.view.displayCurrentPosition(this.race.getCars());
    }

    const winners = this.race.getWinner();
    this.view.displayWinners(winners);
  }

  validateCarNames(carNames) {
    const nameSet = new Set();

    carNames.forEach((name) => {
      if (name.length > 5) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
      }
      if (name.length === 0) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_EMPTY);
      }
      if (nameSet.has(name)) {
        throw new Error(ERROR_MESSAGES.CAR_NAME_DUPLICATED);
      }
      nameSet.add(name);
    });
  }

  validateAttempt(attempt) {
    if (isNaN(attempt)) {
      throw new Error(ERROR_MESSAGES.ATTEMPT_NOT_NUMBER);
    }
    if (attempt <= 0) {
      throw new Error(ERROR_MESSAGES.ATTEMPT_NOT_POSITIVE);
    }
  }
}

export default Controller;
