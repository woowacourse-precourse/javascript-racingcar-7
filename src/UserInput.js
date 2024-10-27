import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES } from "./constants/gameMessage.js";
import { carValidation } from "./validations/carValidation.js";

export const enterCarNames = async () => {
  const carNames = (
    await Console.readLineAsync(INPUT_MESSAGES.PROMPT_CAR_NAMES)
  )
    .split(",")
    .map((carName) => carName.trim());

  carValidation(carNames);
  return carNames;
};

export const enterRoundCount = async () => {
  const roundCount = await Console.readLineAsync(
    INPUT_MESSAGES.PROMPT_ROUND_COUNT
  );
  return roundCount;
};
