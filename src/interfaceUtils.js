import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, MESSAGES } from "./constants/message.js";

export function getInputAsync(message) {
  try {
    return Console.readLineAsync(message);
  } catch (error) {
    throw new Error(ERROR_MESSAGES.PREFIX + ERROR_MESSAGES.GET_INPUT);
  }
}

export function printCarsMove(carsMap) {
  Console.print("");
  carsMap.forEach((carMoveCount, carName) => {
    const moveDash = "-".repeat(carMoveCount);
    Console.print(`${carName} : ${moveDash}`);
  });
}

export function printWinners(winners) {
  Console.print(MESSAGES.PRINT_WINNERS + winners.join(", "));
}
