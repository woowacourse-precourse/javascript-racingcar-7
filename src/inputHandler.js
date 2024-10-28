import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES, INPUT_MESSAGES } from "./constants.js";

export async function getValidatedCarNames() {
  const CARS_INPUT = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.CAR_NAME_MESSAGE);
  const CAR_NAMES = CARS_INPUT.split(",").map(carName => carName.trim());

  if (CAR_NAMES.length === 0 || CAR_NAMES[0] === "") {
    throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAMES);
  }

  const UNIQUE_NAMES = new Set(CAR_NAMES);
  if (UNIQUE_NAMES.size !== CAR_NAMES.length) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAMES);
  }

  CAR_NAMES.forEach((carName) => {
    if (carName.length > 5) {
      throw new Error(ERROR_MESSAGES.CAR_NAME_LENGTH);
    }
  });

  return CAR_NAMES;
}

export async function getValidatedAttemptCount() {
    const ATTEMPT_COUNT_INPUT = await MissionUtils.Console.readLineAsync(INPUT_MESSAGES.ATTEMPT_COUNT_MESSAGE);
    const ATTEMPT_COUNT = Number(ATTEMPT_COUNT_INPUT);
    
    if (isNaN(ATTEMPT_COUNT ) || ATTEMPT_COUNT  <= 0 || !Number.isInteger(ATTEMPT_COUNT )) {
      throw new Error(ERROR_MESSAGES.INVALID_ATTEMPT_COUNT);
    }
  
    return ATTEMPT_COUNT;
  }