import { getInput } from './utils.js';
import { validateCarName } from './validators.js';

class Race {

  async startRace() {
    await this.setCarName();
  }

  async setCarName() {
    const carNameInput = await getInput();  
    validateCarName(carNameInput);       
    return carNameInput.split(',').map(name => name.trim());               
  }
}

export default Race;