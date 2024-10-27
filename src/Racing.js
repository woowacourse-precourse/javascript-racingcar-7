import { Console } from "@woowacourse/mission-utils";
import Car from './Car.js';
import Validate from './Validate.js';

class Racing {
  constructor(inputCarName, inputAttempts) {
    this.car = Validate.validateCar(inputCarName);
    this.attempts = Validate.validateAttempts(inputAttempts);
  }


}