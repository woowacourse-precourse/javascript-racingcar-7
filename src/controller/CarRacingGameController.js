import SetCarMovementModel from "../model/SetCarMovementModel.js";
import SetForwardCountModel from "../model/SetForwardCountModel.js";
import SetWinnerModel from "../model/SetWinnerModel.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

//2차원 배열을 참조하면서, 각자 얼만큼 이동할 것인지 1차원 배열로 반환
class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
    this.SetCarMovementModel = new SetCarMovementModel();
    this.SetForwardCountModel = new SetForwardCountModel();
    this.SetWinnerModel = new SetWinnerModel();
    this.OutputView = new OutputView();
  }
  async setCarMovement() {
    const carNames = await this.InputView.getCarNames();
    const tryCount = await this.InputView.getTryCount();
    const carMovement = this.SetCarMovementModel.setCarMovementValues(
      carNames,
      tryCount
    );

    const totalDistant = this.setEachTemp(carMovement, carNames);

    const winner = this.SetWinnerModel.setWinner(carNames, totalDistant);
    this.OutputView.printWinner(winner);
  }
  setEachTemp(carMovement, carNames) {
    //각 try별 이동 거리 구하고 출력
    let totalDistant = Array(carNames.length).fill(0);
    for (let attempts of carMovement) {
      totalDistant = this.SetForwardCountModel.getTotalDistant(
        attempts,
        carNames.length,
        totalDistant
      );
      this.OutputView.printEachTemp(carNames, totalDistant);
    }
    return totalDistant;
  }
}

export default CarRacingGameController;
