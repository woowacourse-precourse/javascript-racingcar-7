import Car from './Car.js';
import Race from './Race.js';
import { getCarName, getAttempt, splitByDelimiter, printMessage } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';
import { GAME_RULES } from './constants.js';

class RaceController {
  constructor() {
    this.race = new Race();
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();

    for (let i = 0; i < this.race.attemptCount; i++) {
      this.race.generateRandomDistances();
      this.printRaceStatus();
    }

    this.printWinners();
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

  printRaceStatus() {
    this.race.cars.forEach(car => {
      const distanceSymbol = GAME_RULES.DISTANCE_SYMBOL.repeat(car.getDistance());
      printMessage(`${car.getName()} : ${distanceSymbol}`);
    });
    printMessage('');
  }

  printWinners() {
    const winners = this.race.getWinners();
    printMessage(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default RaceController;
