// 게임 진행을 담당하는 컨트롤러

import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import { ERROR_MESSAGE } from "../utils/message.js";

class GameController {
  async start() {
    const carNamesInput = await InputView.readCarNames();
    if (!this.verifyCarNames(carNamesInput)) return;

    OutputView.printCarNames(this.carNames);
  }

  verifyCarNames(carNamesInput) {
    // 입력값을 쉼표로 분리하여 각 자동차 이름에 대해 트림 후 배열로 저장
    const carNames = carNamesInput.split(",").map((name) => name.trim());

    // 이름이 5자를 초과하거나, 중복된 이름이 있는 경우 검증 실패
    const hasInvalidName = carNames.some(
      (name) => name.length === 0 || name.length > 5
    );
    const hasDuplicateName = new Set(carNames).size !== carNames.length;

    if (hasInvalidName) {
      OutputView.printErrorMessage(ERROR_MESSAGE.CAR_NAME_LENGTH);
      return false;
    }

    if (hasDuplicateName) {
      OutputView.printErrorMessage(ERROR_MESSAGE.DUPLICATE_NAME);
      return false;
    }

    // 자동차 이름 배열로 저장
    this.carNames = carNames;
    return true;
  }
}

export default GameController;
