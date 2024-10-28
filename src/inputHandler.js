import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, INPUT_MESSAGES } from "./constants.js";

export async function getValidatedCarNames() {
  const CARS_INPUT = await Console.readLineAsync(INPUT_MESSAGES.CAR_NAME_MESSAGE);
  const carNames = CARS_INPUT.split(",").map(carName => carName.trim());

  carNames.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });

  return carNames;
}

export async function getValidatedAttemptCount() {
    const ATTEMPT_COUNT_INPUT = await Console.readLineAsync(INPUT_MESSAGES.ATTEMPT_COUNT_MESSAGE);
    const ATTEMPT_COUNT = Number(ATTEMPT_COUNT_INPUT);
    
    if (isNaN(ATTEMPT_COUNT ) || ATTEMPT_COUNT  <= 0 || !Number.isInteger(ATTEMPT_COUNT )) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPT_COUNT);
    }
  
    return ATTEMPT_COUNT;
  }