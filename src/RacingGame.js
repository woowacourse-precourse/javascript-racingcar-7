import RaceManager from "./RaceManager.js";
import { Console } from "@woowacourse/mission-utils";

class RacingGame {
  constructor(carNames) {
    this.carName = carNames.map((carName) => new RaceManager(carName));
  }

  play(roundCount) {
    Console.print("\n실행결과");

    for (let round = 0; round < roundCount; round++) {
      this.playOneRound();
      this.printRoundResult();
      Console.print("\n");
    }
  }

  playOneRound() {
    this.carName.forEach((car) => {
      const randomNumber = car.createRandomNumber();
      car.move(randomNumber);
    });
  }

  printRoundResult() {
    this.carName.forEach((car) => {
      Console.print(`${car.name} : ${car.printRacingState()}`);
    });
  }
}
export default RacingGame;
