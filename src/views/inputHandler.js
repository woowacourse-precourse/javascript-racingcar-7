import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../constants/index.js";

export const inputHandler = {
  carNameInput: async () => {
    const carNames = await Console.readLineAsync(GAME_MESSAGES.START);

    if (carNames.trim() === "") {
      throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.BLANK);
    }
    return carNames;
  },

  racingTryCountInput: async () => {
    const racingTryCount = await Console.readLineAsync(
      GAME_MESSAGES.ANSWER_COUNT
    );
    if (racingTryCount.trim() === "") {
      throw new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.BLANK);
    }
    if (isNaN(racingTryCount)) {
      throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER);
    }
    if (racingTryCount < 1) {
      throw new Error(ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE);
    }
    return racingTryCount;
  },
};
