import { Console, Random } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carNames, tryCount) {
    this.cars = carNames;
    this.tryCount = tryCount;
  }

  raceCars() {
    let movingForward = new Array(this.cars.length).fill("");

    Console.print("\n실행결과");

    for (let i = 0; i < this.tryCount; i++) {
      for (let j = 0; j < this.cars.length; j++) {
        let moveCount = Random.pickNumberInRange(0, 9);
        if (moveCount >= 4) {
          movingForward[j] += "-";
        } else movingForward[j] += "";

        Console.print(`${this.cars[j]} : ${movingForward[j]}`);
      }
      Console.print("\n");
    }

    return this.getWinner(movingForward);
  }

  getWinner(movingForward) {
    let maxRange = movingForward[0];
    let result = [];

    for (const range of movingForward) {
      if (range.length >= maxRange) {
        maxRange = range.length;
      }
    }

    for (let i = 0; i < this.cars.length; i++) {
      if (movingForward[i] === maxRange) {
        result.push(this.cars[i]);
      }
    }

    const resultString = result.join(", ");
    Console.print(`최종 우승자 : ${resultString}`);
  }
}

export default RacingGame;
