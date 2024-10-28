import Race from '../models/Race.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

export default class RaceController {
  constructor() {
    this.race = null;
  }

  async run() {
    try {
      const carNames = await InputView.readCarNames();
      this.initRace(carNames);
    } catch (error) {
      throw new Error("[ERROR]");
    }
  }

  async initRace(carNames) {
    this.race = new Race(carNames);
    const attempts = await InputView.readAttemptCount();
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
