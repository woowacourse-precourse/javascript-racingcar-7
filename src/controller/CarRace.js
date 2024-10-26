import InputView from "../view/InputView.js";

class CarRace {
  constructor() {}

  async getCarNamesFromUserInput() {
    const input = await InputView.readCarNames();
  }
}

export default CarRace;
