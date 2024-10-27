import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";
import { isValidCarName } from "../validations/isValidCarName.js";
import { isValidRound } from "../validations/isValidRound.js";
import { Car } from "../model/Car.js";
import { determineWinners } from "../utils/determineWinners.js";
import { moveForwardEachCar } from "../utils/moveForwardEachCar.js";
import { displayRoundResult } from "../utils/displayRoundResult.js";

export class RaceController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const cars = await this.initializeCarData();
    const round = await this.initializeRoundData();

    this.race(cars, round);
  }

  async initializeCarData() {
    const carNameString = await this.inputView.getCarName();
    const cars = isValidCarName(carNameString);
    return cars.map((carName) => new Car(carName));
  }

  async initializeRoundData() {
    const round = await this.inputView.getRaceRound();
    isValidRound(round);
    return round;
  }

  race(cars, round) {
    this.outputView.printNewLine();
    this.outputView.printResultStart();
    for (let i = 0; i < round; i++) {
      moveForwardEachCar(cars);
      displayRoundResult(cars);
    }
    this.outputView.printWinner(determineWinners(cars));
  }
}
