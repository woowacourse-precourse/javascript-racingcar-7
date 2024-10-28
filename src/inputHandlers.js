import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";
import { validateCarNames } from "./validator.js";

export async function getCarNames() {
  const input = await Console.readLineAsync(MESSAGES.CAR_NAME_INPUT);
  const inputCarNames = input.split(",").map((name) => name.trim());
  validateCarNames(inputCarNames);
  return inputCarNames;
}
