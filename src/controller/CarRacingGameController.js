import InputView from "../view/InputView.js";

class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
  }
  async setModelData() {
    const carNames = await this.InputView.getCarNames();
    const tryCount = await this.InputView.getTryCount();
  }
}

export default CarRacingGameController;
