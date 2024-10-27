import view from './view.js';
import validator from './utils/validator.js';
import { STRINGS } from './constants/values.js';
import Car from './Car.js';

class Controller {
  async play() {
    Car.clearInstances();
    await this.readCars();
    await this.readTrialCount();
  }

  async readCars() {
    const carNameAnswer = await view.readCars();
    const carNames = carNameAnswer.split(STRINGS.inputNameDelimiter);
    validator.validateCarNames(carNames);
    Car.addCarInstances(carNames);
  }

  async readTrialCount() {
    const trialCount = Number(await view.readTrialCount());
    validator.validateTrialCount(trialCount);
    this.execute(trialCount);
  }

  executeOnce() {
    const totalCarProgress = Car.executeAllCars();
    totalCarProgress.forEach(({ name, progress }) => {
      view.printProgress(name, progress);
    });
    view.printLineBreak();
  }

  execute(trialCount) {
    view.printExecutionResultMessage();
    for (let i = 0; i < trialCount; i += 1) {
      this.executeOnce();
    }
    this.printWinner();
  }

  printWinner() {
    const winners = Car.getWinner();
    view.printWinner(winners);
  }
}

export default Controller;
