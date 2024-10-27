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
  }
}

export default RacingGame;
