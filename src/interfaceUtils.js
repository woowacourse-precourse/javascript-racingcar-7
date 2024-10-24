import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";

export function getInputAsync(message) {
  return Console.readLineAsync(message);
}

export function printCarsMove(carsMap) {
  Console.print("");
  for (const [carName, carLength] of carsMap) {
    const lengthDash = "-".repeat(carLength);
    Console.print(`${carName} : ${lengthDash}`);
  }
}

export function printWinners(winnerCars) {
  Console.print(MESSAGES.PRINT_WINNERS + winnerCars.join(", "));
}
