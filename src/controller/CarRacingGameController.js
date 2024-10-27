import SetCarMovementModel from "../model/SetCarMovementModel.js";
import SetForwardCountModel from "../model/SetForwardCountModel.js";
import InputView from "../view/InputView.js";

//2차원 배열을 참조하면서, 각자 얼만큼 이동할 것인지 1차원 배열로 반환
class CarRacingGameController {
  constructor() {
    this.InputView = new InputView();
    this.SetCarMovementModel = new SetCarMovementModel();
    this.SetForwardCountModel = new SetForwardCountModel();
  }
  async setCarMovement() {
    //입력받은 자동차 이름 배열과 시도 횟수를 SetCarMovementModel에 전달
    const carNames = await this.InputView.getCarNames();
    const tryCount = await this.InputView.getTryCount();
    const carMovement = this.SetCarMovementModel.setCarMovementValues(
      carNames,
      tryCount
    );
    for (let attempts of carMovement) {
      const attemptMovement =
        this.SetForwardCountModel.getForwardCount(attempts);
    }
  }
}
//carMovement 반복 -> 모델에 입력
export default CarRacingGameController;
