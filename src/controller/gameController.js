// 게임 진행을 담당하는 컨트롤러

import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import Verify from "../utils/verify.js";

class GameController {
  async start() {
    const carNamesInput = await InputView.readCarNames();
    const carNames = Verify.verifyCarNames(carNamesInput);
    if (!carNames) return;
    this.carNames = carNames;

    const tryCountInput = await InputView.readGameRounds();
    const tryCount = Verify.verifyTryCount(tryCountInput);
    if (!tryCount) return;
    this.tryCount = tryCount;

    OutputView.printGameStart();
  }
}

export default GameController;
