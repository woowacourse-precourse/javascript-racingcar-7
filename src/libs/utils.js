import { MissionUtils } from "@woowacourse/mission-utils";
import { validateEmptyInput, validateNumberType, validateStringType } from "./validate.js";

export async function getInput(input) {
  return MissionUtils.Console.readLineAsync(input);
}

export function printResult(result) {
  MissionUtils.Console.print(result);
}

export function getRandomNumberInRage(start, end) {
  return MissionUtils.Random.pickNumberInRange(start, end);
}

export async function getValidatedStringInput(message) {
  const input = await getInput(message);
  validateEmptyInput(input);
  return validateStringType(input);
}

export async function getValidatedNumberInput(message) {
  const input = await getInput(message);
  validateEmptyInput(input);
  return validateNumberType(input);
}
