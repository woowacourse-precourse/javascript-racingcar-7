import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants.js";
import { validateCarNames, parseMoveAttempts } from "./validator.js";

async function getInput(promptMessage, validationFn) {
  return new Promise((resolve, reject) => {
    Console.readLineAsync(promptMessage)
      .then((input) => {
        try {
          const validatedInput = validationFn(input);
          resolve(validatedInput);
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => reject(error));
  });
}

export async function getCarNames() {
  return getInput(MESSAGES.CAR_NAME_INPUT, (input) => {
    const names = input.split(",").map((name) => name.trim());
    validateCarNames(names);
    return names;
  });
}

export async function getMoveAttempts() {
  return getInput(MESSAGES.ATTEMPTS_INPUT, parseMoveAttempts);
}
