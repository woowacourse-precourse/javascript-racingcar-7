import InputView from "../view/InputView.js";

class CarRace {
  constructor() {}

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
    const carList = this.parseCarNames(input);
    console.log(carList);
  }

  parseCarNames(input) {
    return input.split(",");
  }
}

export default CarRace;
