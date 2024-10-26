import { getCarName, getAttempt } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';
import Car from './Car.js';

class Race {

  constructor() {
    this.cars = [];
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();
  }

  async setCarName() {
    const carNameInput = await getCarName();  
    validateCarName(carNameInput);       
    this.cars = carNameInput.split(',').map(name => new Car(name.trim()));             
  }

  async setAttemptCount() {
    const attemptCount = await getAttempt();
    validateAttemptCount(attemptCount);
    return attemptCount;
  }
}

export default Race;