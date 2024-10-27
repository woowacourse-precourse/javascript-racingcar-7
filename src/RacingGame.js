import RaceManager from "./RaceManager.js";
import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "./constants/gameMessage.js";
import { CONDITIONS } from "./constants/conditon.js";
class RacingGame {
  constructor(carNames) {
    this.carName = carNames.map((carName) => new RaceManager(carName));
  }

  play(roundCount) {
    Console.print(OUTPUT_MESSAGES.RESULT_MESSAGE);

    for (let round = CONDITIONS.INITIAL_ROUND; round < roundCount; round++) {
      this.playOneRound();
      this.printRoundResult();
      Console.print(CONDITIONS.NEW_LINE);
    }
    this.showWinners();
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

  MaxPosition() {
    return Math.max(...this.carName.map((car) => car.position));
  }

  WinnerNames() {
    const maxPosition = this.MaxPosition();
    return this.carName.filter((car) => car.position === maxPosition);
  }

  showWinners() {
    const winners = this.WinnerNames();
    const winnerNames = winners.map((car) => car.name).join(", ");
    Console.print(`${OUTPUT_MESSAGES.WINNER_MESSAGE}${winnerNames}`);
  }
}
export default RacingGame;
