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
    this.runRaceRounds(); 
    this.printWinners();
  }

  runRaceRounds() {  
    for (let i = 0; i < this.race.attemptCount; i++) {
      this.race.generateRandomDistances();
      this.printRaceStatus();
    }
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
