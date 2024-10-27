import InputView from "../view/InputView.js";
import Validator from "./Validator.js";
import RacingCars from "../model/RacingCars.js";

class CarRace {
  constructor() {}

  async init() {
    const racingCars = new RacingCars();
    await this.registerRacingCars(racingCars);
  }

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    return this.parseCarNames(input);
  }

  async getMoveAttemptsFromUserInput() {
    const attempts = await InputView.readMoveAttempts();
    Validator.checkMoveAttempts(attempts);
    return attempts;
  }

  parseCarNames(input) {
    return input.split(",");
  }

  async registerRacingCars(racingCars) {
    const carList = await this.getCarNamesFromUserInput();
    Validator.checkCarList(carList);
    carList.forEach((carName) => {
      Validator.checkName(carName);
      racingCars.registerCar(carName);
    });
  }
}

export default CarRace;
