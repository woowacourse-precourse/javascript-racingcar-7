import { Console } from "@woowacourse/mission-utils";

class Output {
  static async printEachStep(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.forwardCount)}`);
    });
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default Output;
