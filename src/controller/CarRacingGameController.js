import SetCarMovementModel from "../model/SetCarMovementModel.js";
import SetForwardCountModel from "../model/SetForwardCountModel.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";

//2차원 배열을 참조하면서, 각자 얼만큼 이동할 것인지 1차원 배열로 반환
class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
    this.SetCarMovementModel = new SetCarMovementModel();
    this.SetForwardCountModel = new SetForwardCountModel();
    this.OutputView = new OutputView();
  }
  async setCarMovement() {
    //입력받은 자동차 이름 배열과 시도 횟수를 SetCarMovementModel에 전달
    const carNames = await this.InputView.getCarNames();
    const tryCount = await this.InputView.getTryCount();
    const carMovement = this.SetCarMovementModel.setCarMovementValues(
      carNames,
      tryCount
    );
    let totalMovement = [0, 0, 0];
    for (let attempts of carMovement) {
      //한 try별 움직인 거리
      const attemptMovement =
        this.SetForwardCountModel.getForwardCount(attempts);
      totalMovement = attemptMovement.map(
        (value, index) => value + totalMovement[index]
      );
      this.OutputView.printOutput(carNames, totalMovement);
    }
  }
}
export default CarRacingGameController;
