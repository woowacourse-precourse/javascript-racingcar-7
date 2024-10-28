import { Console } from "@woowacourse/mission-utils";

class Printer {
  static printResult(racingGame) {
    Console.print("실행 결과");

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

    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`);
  }
}

export default Printer;
