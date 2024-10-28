import { Console } from "@woowacourse/mission-utils";
import { MESSAGE, PREFIX } from "./constants.js";

class Printer {
  static printResult(racingGame) {
    Console.print(MESSAGE.GAME_RESULT);

    for (let gameRound = 0; gameRound < racingGame.getTryCount(); gameRound++) {
      racingGame.getCars().forEach((car) => {
        const distanceByRound = car.getResultBy(gameRound);
        Console.print(`${car.getName()} : ${"-".repeat(distanceByRound)}`);
      });

      Console.print("");
    }
  }

  static printFinal(winners) {
    const winnerNames = winners.map((winner) => winner.getName());

    Console.print(`${PREFIX.WINNER} ${winnerNames.join(", ")}`);
  }
}

export default Printer;
