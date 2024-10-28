import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGES } from "../constants/messages.js";

export const input = {
  carName: async () => await Console.readLineAsync(CONSOLE_MESSAGES.START),

  tryCount: async () => await Console.readLineAsync(CONSOLE_MESSAGES.TRY_COUNT),
};
