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

      this.initializeGame(validCarNames, validRoundCount); // 수정된 변수 사용
      this.executeGameRounds(validRoundCount);
      this.winnerAnnouncement();
    } catch (e) {
      OutputView.throwErrorMessage(e);
      return Promise.reject(e);
    }
  }

  initializeGame(carNames, rounds) {
    if (!Array.isArray(carNames) || carNames.length === 0) {
      throw new Error("Car names must be a valid array.");
    }
    this.racingGame = new RacingGame(carNames); // RacingGame 인스턴스 생성
    OutputView.printGameStart();
  }

  executeGameRounds(rounds) {
    let currentRound = 0;
    while (currentRound < rounds) {
      this.racingGame.playOneRound();
      const finalStatus = this.racingGame.getCarsStatus();
      OutputView.printRoundStatus(finalStatus);
      currentRound++;
    }
  }

  winnerAnnouncement() {
    const winners = this.racingGame.findWinners();
    OutputView.printWinners(winners);
  }
}
