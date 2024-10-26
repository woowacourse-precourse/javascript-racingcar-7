import { Console } from '@woowacourse/mission-utils';
import { USER } from './Constants/Message.js';
import { nameValidation, tryCountValidation } from './Validation/Validation.js';
import Car from './Car.js';

class RaceGame {
  constructor() {
    this.carList = [];
    this.tryCount = 0;
  }

  async ready() {
    await this.getUserCarName();
    await this.getUserTryCount();
  }

  async getUserCarName() {
    const inputName = await Console.readLineAsync(USER.INPUT_CAR_NAME);
    nameValidation(inputName);
    this.carList = inputName.split(',').map((name) => new Car(name));
  }

  async getUserTryCount() {
    const inputTryCount = await Console.readLineAsync(USER.INPUT_TRY_COUNT);
    tryCountValidation(inputTryCount);
    this.tryCount = parseInt(inputTryCount, 10);
  }
}

export default RaceGame;
