import { Random } from '@woowacourse/mission-utils';
import RaceView from '../view/RaceView.js';
import CarModel from '../model/CarModel.js';
import RaceModel from '../model/RaceModel.js';

class RaceController {
  constructor() {
    this.view = new RaceView();
    this.race = null;
  }

  async startRace() {
    const carNames = await this.view.getCarNames();
    const attemptCount = await this.view.getAttemptCount();

    const cars = carNames.map((name) => new CarModel(name));
    this.race = new RaceModel(cars);

    this.runRace(attemptCount);
  }

  runRace(attemptCount) {
    for (let i = 0; i < attemptCount; i++) {
      this.determineCarMovements();
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
}

export default RaceController;
