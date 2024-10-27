import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/gameMessage.js";
import { carValidation } from "./validations/carValidation.js";

export const enterCarNames = async () => {
  const carNames = (await Console.readLineAsync(INPUT_MESSAGE.carNames))
    .split(",")
    .map((carName) => carName.trim());

  carValidation(carNames);
  return carNames;
};
