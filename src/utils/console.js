import { Console } from "@woowacourse/mission-utils";
import { MESSAGES, GAME_RULES } from "../constants/index.js";

export const getCarNames = async () => {
  const carName = await Console.readLineAsync(MESSAGES.CAR_NAME_INPUT);
  return carName.split(GAME_RULES.COMMA).map((carName) => carName.trim());
};
