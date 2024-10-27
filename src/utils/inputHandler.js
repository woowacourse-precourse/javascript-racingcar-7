import { Console } from "@woowacourse/mission-utils";
import { MESSAGES } from "../constants.js";
import { validateCarNames, parseMoveAttempts } from "./validator.js";

export async function getCarNames() {
  return new Promise((resolve, reject) => {
    Console.readLineAsync(MESSAGES.CAR_NAME_INPUT)
      .then((input) => {
        try {
          const names = input.split(",").map((name) => name.trim());
          validateCarNames(names);
          resolve(names);
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => reject(error));
  });
}

export async function getMoveAttempts() {
  return new Promise((resolve, reject) => {
    Console.readLineAsync(MESSAGES.ATTEMPTS_INPUT)
      .then((input) => {
        try {
          const attempts = parseMoveAttempts(input);
          resolve(attempts);
        } catch (error) {
          reject(error);
        }
      })
      .catch((error) => reject(error));
  });
}
