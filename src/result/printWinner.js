import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../errorMessages.js";

export function printWinner(carDistances, carNames) {
  const maxValue = Math.max(...carDistances);
  const winners = carNames.filter(
    (_, index) => carDistances[index] === maxValue
  );

  if (winners.length === 0) {
    throw new Error(ERROR_MESSAGES.NO_WINNER_EXIST_ERROR);
  } else Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
