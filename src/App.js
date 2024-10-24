import { Console } from '@woowacourse/mission-utils';
import InputHandler from './handler/InputHandler.js';
import OutputHandler from './handler/OutputHandler.js';
import MovingCar from "./MovingCar.js";
import createCars from './CreateCar.js';
import RaceResult from './RaceResult.js';

class App {
  constructor() {
    this.inputHandler = new InputHandler();
    this.outputHandler = new OutputHandler();
    this.movingCar = new MovingCar();
    this.raceResult = new RaceResult();
  }

  async run() {
    try {
      const carNames = await this.inputHandler.carNamesInput();
      const countNum = await this.inputHandler.countNumInput();
      const cars = createCars(carNames, countNum);
      this.movingCar.startRace(cars, countNum);
      const winners = this.raceResult.findWinners(cars);
      Console.print(`최종 우승자 : ${winners}`);
    } catch (error) {
      this.outputHandler.printError(error);
    }
  }
}

export default App;