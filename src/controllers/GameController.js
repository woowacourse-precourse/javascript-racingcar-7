import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import { InputParser } from '../utils/Parser.js';
import Car from '../models/Car.js';

class GameController {
  async start() {
    const CarNames = await InputView.inputCarNames();
    const tryNumber = await InputView.inputTryNumber();
    this.race(CarNames, tryNumber);
  }

  race(names, tryNumber) {
    const car = new Car();
    car.addCar(names);

    for (let i = 0; i <= tryNumber; i++) {
      car.roundAdvance();
    }
    car.printCars();
    car.pickWinnerName();
  }
}

export default GameController;
