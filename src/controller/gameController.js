// 게임 진행을 담당하는 컨트롤러

import InputView from "../views/inputView.js";
import OutputView from "../views/outputView.js";
import Verify from "../utils/verify.js";
import RacingGame from "../models/racingGame.js";

export default class GameController {
  async start() {
    try {
      const carNamesInput = await InputView.readCarNames();
      const validCarNames = Verify.verifyCarNames(carNamesInput);
      if (!validCarNames) return;

      const roundCountInput = await InputView.readTryCount();
      const validRoundCount = Verify.verifyTryCount(roundCountInput);
      if (!validRoundCount) return;

      await this.initializeGame(validCarNames, validRoundCount);
      await this.executeGameRounds(validRoundCount);

      await this.winnerAnnouncement();
    } catch (e) {
      await OutputView.printErrorMessage(e.message);
    }
  }

  async initializeGame(carNames) {
    RacingGame.init(carNames);
    await OutputView.printGameStart();
  }

  async executeGameRounds(rounds) {
    for (let i = 0; i < rounds; i++) {
      RacingGame.playOneRound();
      const currentStatus = RacingGame.getCarsStatus();
      await OutputView.printRoundStatus(currentStatus);
    }
  }

  async winnerAnnouncement() {
    const winners = RacingGame.findWinners();
    await OutputView.printWinners(winners);
  }
}
