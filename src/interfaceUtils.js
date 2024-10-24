import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants/message.js";

export function inputCars() {
  return Console.readLineAsync(MESSAGES.INPUT_CAR_NAMES);
}

export function inputTrialCount() {
  return Console.readLineAsync(MESSAGES.INPUT_TRIAL_COUNT);
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
