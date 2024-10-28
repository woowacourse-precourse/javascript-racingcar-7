import { Console, Random } from "@woowacourse/mission-utils";
import Utils from "./Utils.js";
import { LOG_MESSAGE } from "./content.js";

class App {
  constructor() {
    this.tryNum;
    this.carName = {};
    this.utils = new Utils();
    this.carId = [];
    this.finalWinner = [];
  }

  async run() {
    this.carName = await this.utils.getCarName();
    this.tryNum = await this.utils.getTryNum();
    this.carId = await Object.keys(this.carName);
    await this.tryCount(this.tryNum);
    this.drivingResults();
  }

  tryCount(tryNum) {
    // 시도 횟수
    Console.print(LOG_MESSAGE.EXECUTION_RESULT);
    for (let i = 0; i < tryNum; i++) {
      this.startRace();
      Console.print("");
    }
  }

  startRace() {
    //무작위 수를 받은 뒤 전진 조건 검사
    for (
      let currentCarIdx = 0;
      currentCarIdx < this.carId.length;
      currentCarIdx++
    ) {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        this.carName[this.carId[currentCarIdx]]++;
      }
      Console.print(
        this.carId[currentCarIdx] +
          " : " +
          "-".repeat(this.carName[this.carId[currentCarIdx]])
      );
    }
  }
  drivingResults() {
    // 최종 최고 점수 검사 및 우승자 출력
    const winnerScore = Math.max(...Object.values(this.carName));
    for (let i = 0; i < this.carId.length; i++) {
      if (this.carName[this.carId[i]] === winnerScore) {
        this.finalWinner.push(this.carId[i]);
      }
    }
    Console.print(LOG_MESSAGE.FINAL_WINNER + this.finalWinner.join(", "));
  }
}

export default App;
