// 게임 진행을 담당하는 컨트롤러

import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import Verify from "../utils/verify.js";
import RacingGame from "../models/racingGame.js";

export default class GameController {
  async start() {
    const carNamesInput = await InputView.readCarNames();
    const validCarNames = Verify.verifyCarNames(carNamesInput);
    if (!validCarNames) return;

    const roundCountInput = await InputView.readTryCount();
    const validRoundCount = Verify.verifyTryCount(roundCountInput);
    if (!validRoundCount) return;

    this.initializeGame(validCarNames, validRoundCount);
    this.executeGameRounds(validRoundCount);
  }

  initializeGame(carNames, rounds) {
    RacingGame.init(carNames);
    OutputView.printGameStart();
  }

  executeGameRounds(rounds) {
    for (let i = 0; i < rounds; i++) {
      RacingGame.playOneRound();
      const currentStatus = RacingGame.getCarsStatus();
      OutputView.printRoundStatus(currentStatus);
    }
  }
}
