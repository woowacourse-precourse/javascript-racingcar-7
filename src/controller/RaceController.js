import { Console, Random } from '@woowacourse/mission-utils';
import RaceView from '../view/RaceView.js';
import CarModel from '../model/CarModel.js';
import RaceModel from '../model/RaceModal.js';

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
      this.moveCars();
    }
  }

  moveCars() {
    this.race.cars.forEach((car) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      Console.print(`car name : ${car.name}`);
      Console.print(`car distance : ${car.distance}`);
      Console.print(`randomValue : ${randomValue}`);
    });
  }
}

export default RaceController;
