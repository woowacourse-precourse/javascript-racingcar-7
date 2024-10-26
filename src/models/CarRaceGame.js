import { MissionUtils } from "@woowacourse/mission-utils";

class CarRaceGame {
  constructor(carProgressRecords, tryCount) {
    this.carProgressRecords = carProgressRecords;
    this.tryCount = tryCount;
  }
  shouldMoveForward() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }

  startRace() {
    this.shouldMoveForward();
  }
}

export default CarRaceGame;
