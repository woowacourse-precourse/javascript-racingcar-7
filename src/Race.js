import { getCarName, getAttempt } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';

class Race {

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();
  }

  async setCarName() {
    const carNameInput = await getCarName();  
    validateCarName(carNameInput);       
    return carNameInput.split(',').map(name => name.trim());               
  }

  async setAttemptCount() {
    const attemptCount = await getAttempt();
    validateAttemptCount(attemptCount);
    return attemptCount;
  }
}

export default Race;