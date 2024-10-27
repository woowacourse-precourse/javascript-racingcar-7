import InputView from "../view/InputView.js";
import Validator from "./Validator.js";
import RacingCars from "../model/RacingCars.js";

class CarRace {
  constructor() {
    this.racingCars = new RacingCars();
  }

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    const carList = this.parseCarNames(input);
  }

  parseCarNames(input) {
    return input.split(",");
  }

  validateCarList(carList) {
    Validator.checkCarList(carList);
    carList.map((carName) => Validator.checkName(carName));
  }

  registerRacingCars(carList) {
    carList.forEach((carName) => this.racingCars.registerCar(carName));
  }
}

export default CarRace;
