import SetCarMovementModel from "../model/SetCarMovementModel.js";
import InputView from "../view/InputView.js";

class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
    this.SetCarMovementModel = new SetCarMovementModel();
  }
  async setModelData() {
    const carNames = await this.InputView.getCarNames();
    const tryCount = await this.InputView.getTryCount();
    console.log(
      this.SetCarMovementModel.setCarMovementValues(carNames, tryCount)
    );
  }
}

export default CarRacingGameController;
