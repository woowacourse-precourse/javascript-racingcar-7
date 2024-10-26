import { getCarName, getAttempt, getRandomNumber } from './utils.js';
import { validateCarName, validateAttemptCount } from './validators.js';
import Car from './Car.js';

class Race {

  constructor() {
    this.cars = [];
    this.attemptCount = 0;  
  }

  async startRace() {
    await this.setCarName();
    await this.setAttemptCount();
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
      if (randomDistance >= 4) { 
        car.move(1);             
      }                    
    });
  }

}

export default Race;