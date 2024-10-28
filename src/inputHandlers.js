import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "./constants.js";
export async function getCarNames() {
  const input = await Console.readLineAsync(MESSAGES.CAR_NAME_INPUT);
  const inputCarNames = input.split(",").map((name) => name.trim());
  return inputCarNames;
}
