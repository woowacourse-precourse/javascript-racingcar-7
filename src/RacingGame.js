import {MissionUtils} from "@woowacourse/mission-utils";
import Utils from "./Utils.js";

class RacingGame {
  constructor() {
    this.scoreBoard = [];
  }

  getScoreBoard() {
    return this.scoreBoard;
  }

  getInitialBoard(carNames) {
    this.scoreBoard = carNames.map((car) => ({name: car, records: []}));
  }

  generateMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  getRacingResultByRound() {
    this.scoreBoard.forEach((dashBoard) => {
      const isMove = this.generateMove();
      dashBoard.records.push(isMove);
    });
  }

  getRacingResult(tryCount) {
    Utils.range(tryCount).forEach(() => {
      this.getRacingResultByRound();
    });
  }

  getWinner(array) {
    const getScores = (round) => round.records.filter(Boolean).length;
    const scores = array.map(getScores);

    const highScore = Math.max(...scores);

    return array.filter((round) => (round.records.filter(Boolean).length === highScore))
      .map((round) => round.name)
      .join(', ');
  }
}

export default RacingGame;
