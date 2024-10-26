import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGES, ERROR_MESSAGES } from "../constants/index.js";

export const inputHandler = {
  carNameInput: async () => {
    const carNames = await Console.readLineAsync(GAME_MESSAGES.START);

    if (carNames.trim() === "") {
      return new Error(ERROR_MESSAGES.CAR_ERROR_MESSAGES.BLANK);
    }

    return carNames;
  },
};
