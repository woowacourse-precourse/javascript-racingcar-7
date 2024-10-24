import { Console } from "@woowacourse/mission-utils";
import { PROMPT_MESSAGES } from "../constants/constants.js";

const InputView = {
  async readCarNameInput() {
    try {
      const input = await Console.readLineAsync(PROMPT_MESSAGES.INPUT_CAR_NAME);
      return input;
    } catch (error) {
      Console.print(ERROR_MESSAGES.READ_INPUT);
    }
  },

  async readRaceAttemptInput() {
    try {
      const input = await Console.readLineAsync(PROMPT_MESSAGES.INPUT_RACE_ATTEMPT);
      return input;
    } catch (error) {
      Console.print(ERROR_MESSAGES.READ_INPUT);
    }
  },
}
export default InputView;