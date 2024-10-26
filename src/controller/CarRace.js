import InputView from "../view/InputView.js";

class CarRace {
  constructor() {}

  async init() {
    const input = await InputView.readCarNames();
  }
}

export default CarRace;
