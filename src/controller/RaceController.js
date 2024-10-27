import { InputView } from "../view/InputView.js";
import { isValidCarName } from "../validations/isValidCarName.js";
import { isValidRound } from "../validations/isValidRound.js";
import { Car } from "../model/Car.js";
import { Race } from "./Race.js";

export class RaceController {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const cars = await this.initializeCarData();
    const round = await this.initializeRoundData();

    const race = new Race(cars, round);
    race.start();
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
