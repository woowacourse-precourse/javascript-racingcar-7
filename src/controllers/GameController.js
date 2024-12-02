import InputView from '../views/InputView.js';
import { InputParser } from '../utils/Parser.js';
import Car from '../models/Car.js';
import OutputView from '../views/OutputView.js';

class GameController {
  #car;

  constructor() {
    this.#car = new Car();
  }

  async start() {
    const CarNames = await InputView.inputCarNames();
    const tryNumber = await InputView.inputTryNumber();
    this.race(CarNames, tryNumber);
    this.raceResult();
  }

  race(names, tryNumber) {
    this.#car.addCar(names);
    for (let i = 0; i < tryNumber; i++) {
      const roundResult = this.#car.roundProcess();
      roundResult.forEach(({ name, advance }) => {
        OutputView.printRoundResult(name, advance);
      });
      OutputView.printBreakPoint();
    }
  }

  raceResult() {
    const winnerNamesArray = this.#car.pickWinnerNames();
    OutputView.printGameResult(winnerNamesArray);
  }
}

export default GameController;
