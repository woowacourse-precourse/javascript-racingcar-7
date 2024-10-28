import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";
import { validateCarNames, validateAttempts } from "./validator.js";

export async function getCarNames() {
  const input = await Console.readLineAsync(MESSAGES.CAR_NAME_INPUT);
  const inputCarNames = input.split(",").map((name) => name.trim());
  validateCarNames(inputCarNames);
  return inputCarNames;
}

export async function getAttempts() {
  const attemps = await Console.readLineAsync(MESSAGES.ATTEMPTS_INPUT);
  validateAttempts(attemps);
  return attemps;
}
