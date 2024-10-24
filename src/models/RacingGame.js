// src/domain/RacingGame.js
import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';
import { validateCarNames, validateAttempts } from '../utils/validator.js';
import OutputView from '../views/OutputView.js';

export default class RacingGame {
  constructor(carNames) {
    this.cars = this.initializeCars(carNames);
  }

  initializeCars(names) {
    const carNames = names.split(',').map(name => name.trim());
    validateCarNames(carNames);
    return carNames.map(name => new Car(name));
  }

  async play(attempts) {
    validateAttempts(attempts);
    
    OutputView.printGameStart();
    for (let i = 0; i < attempts; i++) {
      await this.moveAll();
      this.printStatus();
    }
    
    this.announceWinners();
  }

  async moveAll() {
    for (const car of this.cars) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      car.move(randomNumber);
    }
  }

  printStatus() {
    this.cars.forEach(car => {
      OutputView.printCarStatus(car.name, car.getCurrentPosition());
    });
  }

  announceWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.position));
    const winners = this.cars
      .filter(car => car.position === maxPosition)
      .map(car => car.name)
      .join(', ');
    
    OutputView.printWinners(winners);
  }
}