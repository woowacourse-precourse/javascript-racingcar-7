import Race from './Race.js';
import { getCarName, getAttempt, splitByDelimiter, printMessage } from './common/utils.js';
import { validateCarName, validateAttemptCount } from './common/validators.js';
import { GAME_RULES, LOG_MESSAGE } from './common/constants.js';

class RaceController {
  constructor() {
    this.race = new Race();
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();
    this.runRaceRounds(); 
    this.printWinners();
  }

  async setCarName() {
    const carNameInput = await getCarName();
    validateCarName(carNameInput);
    const carNames = splitByDelimiter(carNameInput);
    this.race.setCars(carNames);
  }

  async setAttemptCount() {
    const attemptCount = await getAttempt();
    validateAttemptCount(attemptCount);
    this.race.setAttemptCount(Number(attemptCount));
  }

  runRaceRounds() {
    for (let i = 0; i < this.race.attemptCount; i++) {
      this.race.generateRandomDistances(); 
      this.printRaceStatus();
    }
  }

  printRaceStatus() {
    const status = this.race.getRaceStatus();
    status.forEach(({ name, distance }) => {
      const distanceSymbol = GAME_RULES.DISTANCE_SYMBOL.repeat(distance);
      printMessage(`${name} : ${distanceSymbol}`);
    });
    printMessage('');
  }

  printWinners() {
    const winners = this.race.getWinners();
    printMessage(LOG_MESSAGE.WINNERS_ANNOUNCEMENT + winners.join(', '));
  }
}

export default RaceController;
