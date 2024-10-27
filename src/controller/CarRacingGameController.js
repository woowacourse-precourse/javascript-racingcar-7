import InputView from "../view/InputView.js";

class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
  }
  async setModelData() {
    const value = await this.InputView.getCarNames();
  }
}

export default CarRacingGameController;
