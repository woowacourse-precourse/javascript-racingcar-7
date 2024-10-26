import { Random, Console } from "@woowacourse/mission-utils";

class RacingCalc {
  constructor(carName) {
    this.carArr = carName;
    this.moveCntArr = new Array(this.carArr.length).fill(0);
  }

  moveRacing(attemptCnt) {
    for (let cnt = 0; cnt < attemptCnt; cnt++) {
      for (let carIdx = 0; carIdx < this.carArr.length; carIdx++) {
        let random = Random.pickNumberInRange(0, 9);
        if (random >= 4) this.moveCntArr[carIdx]++;

        Console.print(
          `${this.carArr[carIdx]} : ${"-".repeat(this.moveCntArr[carIdx])}`
        );
      }
      Console.print("");
    }
    this.printWinner();
  }
  printWinner() {
    let maxScore = Math.max(...this.moveCntArr);
  }
}

export default RacingCalc;
