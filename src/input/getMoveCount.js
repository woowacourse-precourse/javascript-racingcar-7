import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../errorMessage.js";

export const getMoveCount = async () => {
  const moveCountInput =
    await Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
  if (isNaN(moveCountInput)) {
    throw new Error(ERROR_MESSAGE.NON_NUMBER);
  }
  return Number(moveCountInput);
};
