import { InputView } from "../view/InputView.js";
import { OutputView } from "../view/OutputView.js";
import { isValidCarName } from "../utils/isValidCarName.js";
import { isValidRound } from "../utils/isValidRound.js";
import { Car } from "../model/Car.js";

export class RaceController {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const cars = await this.initializeCarData();
    const round = await this.initializeRoundData();
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
}
