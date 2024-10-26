import { getCarName, getAttempt, getRandomNumber } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';
import { GAME_RULES } from './constants.js';
import Car from './Car.js';

class Race {
  constructor() {
    this.cars = [];
    this.attemptCount = 0;
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();

    for (let i = 0; i < this.attemptCount; i++) {
      this.generateRandomDistances();
      this.printRaceStatus();
    }

    const winners = this.getWinners();
    console.log(`최종 우승자: ${winners.join(', ')}`);
  }

  async setCarName() {
    const carNameInput = await getCarName();  
    validateCarName(carNameInput);       
    this.cars = carNameInput.split(',').map(name => new Car(name.trim()));             
  }

  async setAttemptCount() {
    const attemptCount = await getAttempt();
    validateAttemptCount(attemptCount);
    this.attemptCount = Number(attemptCount);
  }

  generateRandomDistances() {
    this.cars.forEach(car => {
      const randomDistance = getRandomNumber(0, 9);  
      if (randomDistance >= GAME_RULES.MOVE_THRESHOLD) { 
        car.move(1);             
      }                    
    });
  }

  printRaceStatus() {
    this.cars.forEach(car => {
      const distanceSymbol = GAME_RULES.DISTANCE_SYMBOL.repeat(car.getDistance()); 
      console.log(`${car.getName()} : ${distanceSymbol}`);
    });
    console.log(''); 
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map(car => car.getDistance()));
    return this.cars
      .filter(car => car.getDistance() === maxDistance)
      .map(car => car.getName());
  }
}

export default Race;
