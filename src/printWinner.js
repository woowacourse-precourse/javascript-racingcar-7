import { Console } from "@woowacourse/mission-utils";

export function printWinner(carDistances, carNames) {
  const maxValue = Math.max(...carDistances);
  const winners = carNames.filter(
    (_, index) => carDistances[index] === maxValue
  );

  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
