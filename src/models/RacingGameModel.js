import { Random } from "@woowacourse/mission-utils";

class RacingGameModel {
  constructor(carNames, tryCount) {
    this.cars = carNames;
    this.tryCount = tryCount;
    this.movingForward = new Array(this.cars.length).fill("");
  }

  raceCars() {
    this.cars.forEach((_, index) => {
      const moveCount = Random.pickNumberInRange(0, 9);
      if (moveCount >= 4) {
        this.movingForward[index] += "-";
      }
    });
    return this.movingForward;
  }
}

export default RacingGameModel;
