import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";

export function getInputAsync(message) {
  return Console.readLineAsync(message);
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
