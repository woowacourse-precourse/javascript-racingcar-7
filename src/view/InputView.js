import { MissionUtils } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../static/Static.js";

const InputView = {
  readCarNames: async () => {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputName);
  },

  readAttempts: async () => {
    return await MissionUtils.Console.readLineAsync(PRINT_MESSAGE.inputTries);
  }
};

export default InputView;