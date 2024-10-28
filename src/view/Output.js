import { Console } from "@woowacourse/mission-utils";

export class Output {
  printRound(cars) {
    cars.forEach((car) => {
      Console.print(`${car.getName()} : ${"-".repeat(car.getDistance())}`);
    });
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
