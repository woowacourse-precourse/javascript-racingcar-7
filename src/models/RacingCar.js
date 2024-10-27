import generateRandomNumber from '../utils/getRandomNumber.js';
import Car from './Car.js';

class RacingCar extends Car {
  move() {
    const randomValue = generateRandomNumber();
    if (randomValue >= 4) {
      this.advance += 1;
    }
  }
}

export default RacingCar;
