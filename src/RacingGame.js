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

  getRacingRoundResult (array, count) {
    Utils.range(count).forEach(() => {
      this.scoreBoard.forEach((round) => {
       const isMove = this.generateMove();
       round.records.push(isMove);
      });
    });
    return this.scoreBoard;
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
