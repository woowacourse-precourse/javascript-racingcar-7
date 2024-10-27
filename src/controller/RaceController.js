import { Random, Console } from '@woowacourse/mission-utils';
import RaceView from '../view/RaceView.js';
import CarModel from '../model/CarModel.js';
import RaceModel from '../model/RaceModel.js';
import InputValidator from './InputValidator.js';

class RaceController {
  constructor() {
    this.view = new RaceView();
    this.race = null;
  }

  async startRace() {
    const carNames = await this.view.getCarNames();
    InputValidator.validateCarName(carNames);
    const attemptCount = await this.view.getAttemptCount();
    InputValidator.validateAttemptCount(attemptCount);

    const cars = carNames.map((name) => new CarModel(name));
    this.race = new RaceModel(cars);

    this.runRace(attemptCount);
    this.showWinners();
  }

  runRace(attemptCount) {
    Console.print('\n실행 결과');
    for (let i = 0; i < attemptCount; i++) {
      this.determineCarMovements();
      this.view.printRaceStatus(this.race.cars);
    }
  }

  determineCarMovements() {
    this.race.cars.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);

      if (this.canAdvance(randomValue)) {
        car.advance();
      }
    });
  }

  canAdvance(randomValue) {
    return randomValue >= 4;
  }

  showWinners() {
    const winner = this.race.getWinner();
    this.view.printWinner(winner);
  }
}

export default RaceController;
