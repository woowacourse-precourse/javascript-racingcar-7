import { Console } from "@woowacourse/mission-utils";

class Output {
  async printEachRound(records) {
    records[0].forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.forwardCount)}`);
    });
  }

  async printRounds(rounds) {
    rounds.forEach((round) => {
      printEachRound(round);
      Console.print("\n");
    });
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default Output;
