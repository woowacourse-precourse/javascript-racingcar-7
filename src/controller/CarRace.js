import InputView from "../view/InputView.js";
import Validator from "./validator.js";

class CarRace {
  constructor() {}

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    const carList = this.parseCarNames(input);
  }

  parseCarNames(input) {
    return input.split(",");
  }

  validateCarNames(carList) {
    Validator.checkDuplicateName(carList);
    carList.map((carName) => Validator.checkName(carName));
  }
}

export default CarRace;
