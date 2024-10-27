import Car from './Car.js';
import Race from './Race.js';
import { getCarName, getAttempt, splitByDelimiter } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';

class RaceController {

  constructor() {
    this.race = new Race();
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();
    await this.race.startRace();
  }

  async setCarName() {
    const carNameInput = await getCarName();
    validateCarName(carNameInput);
    this.race.cars = splitByDelimiter(carNameInput).map(name => new Car(name.trim()));
  }

  async setAttemptCount() {
    const attemptCount = await getAttempt();
    validateAttemptCount(attemptCount);
    this.race.attemptCount = Number(attemptCount);
  }

}

export default RaceController;