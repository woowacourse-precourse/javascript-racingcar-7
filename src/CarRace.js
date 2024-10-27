import { Random } from "@woowacourse/mission-utils";

class CarRace {
  constructor(carNames, numberOfRounds) {
    this.carNames = carNames;
    this.numberOfRounds = numberOfRounds;
    this.roundResults = []; // 각 라운드의 결과
  }

  startRace() {
    for (let roundIndex = 0; roundIndex < this.numberOfRounds; roundIndex++) {
      const currentRoundResults = this.moveCars(); // 자동차 이동 결과
      this.roundResults.push(currentRoundResults);
    }
    return this.roundResults; // 모든 라운드 결과 반환
  }

  moveCars() {
    return this.carNames.map((carName) => {
      const randomValue = Random.pickNumberInRange(0, 9);
      return randomValue >= 4 ? carName : ""; // 4 이상일 경우 자동차 이름 반환
    });
  }
}

export default CarRace;
