import view from './view.js';
import validator from './utils/validator.js';
import { STRINGS } from './constants/values.js';

class Controller {
  async play() {
    await this.readCars();
  }

  async readCars() {
    const cars = await view.readCars();
    const carNames = cars.split(STRINGS.inputNameDelimiter);
    validator.validateCarNames(carNames);
  }

  async readTrialCount() {
    const trialCount = Number(await view.readTrialCount());
    validator.validateTrialCount(trialCount);
  }
}

export default Controller;
