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

  getWinner() {
    const maxDistance = Math.max(
      ...this.movingForward.map((moves) => moves.length)
    );

    return this.cars.filter(
      (_, index) => this.movingForward[index].length === maxDistance
    );
  }
}

export default RacingGameModel;
