import { Random } from "@woowacourse/mission-utils";
import OutputView from "./view/OutputView";

class RacingCalc {
  constructor(carName) {
    this.carArr = carName;
    this.moveCntArr = new Array(this.carArr.length).fill(0);
    this.output = new OutputView();
  }

  moveRacing(attemptCnt) {
    for (let cnt = 0; cnt < attemptCnt; cnt++) {
      this.makeRandom();
      this.output.printGap();
    }
    this.calcMaxScoreWinner();
  }

  makeRandom() {
    const MOVING_CONDITION = 4;
    for (let carIdx = 0; carIdx < this.carArr.length; carIdx++) {
      let random = Random.pickNumberInRange(0, 9);
      if (random >= MOVING_CONDITION) this.moveCntArr[carIdx]++;

      this.output.printCurRacing(this.carArr, carIdx, this.moveCntArr);
    }
  }

  calcMaxScoreWinner() {
    let maxScore = Math.max(...this.moveCntArr);
    let winnerIdx = this.moveCntArr.indexOf(maxScore);
    const winner = [];

    while (winnerIdx != -1) {
      winner.push(this.carArr[winnerIdx]);
      winnerIdx = this.moveCntArr.indexOf(maxScore, winnerIdx + 1);
    }

    this.output.printWinner(winner);
  }
}

export default RacingCalc;
