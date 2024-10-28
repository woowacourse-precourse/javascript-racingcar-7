import Race from '../models/Race.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import Validator from '../utils/Validator.js';
export default class RaceController {
  constructor() {
    this.race = null;
  }

  async run() {
    try {
      const names = await InputView.readCarNames();
      const carNames = Validator.validateCarNames(names.split(',').map((name) => name.trim()));
      this.initRace(carNames);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }

  async initRace(carNames) {
    this.race = new Race(carNames);
    const attemptsInput = await InputView.readAttemptCount();
    const attempts = Validator.validateAttemptCount(parseInt(attemptsInput, 10));
    this.startRace(attempts);
  }

  startRace(attempts) {
    for (let i = 0; i < attempts; i += 1) {
      this.race.proceedRound();
      OutputView.printRoundResult(this.race.getCars());
    }
    OutputView.printWinners(this.race.getWinners());
  }
}
