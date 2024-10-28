import { InputCarName, InputTryNumber } from "../view/ConsoleView.js";
import InputValidator from "../utils/InputValidator.js";
import { Console } from "@woowacourse/mission-utils";

export const userInput = async () => {
  try {
    const carNames = await InputCarName();
    InputValidator.isEmpty(carNames);

    const tryNumber = await InputTryNumber();
    const parseTryNumber = Number(tryNumber);
    InputValidator.isMaxValue(parseTryNumber, 10000);
    InputValidator.isNotInteger(parseTryNumber);

    return { carNames, parseTryNumber };
  } catch (error) {
    throw error;
  }
};
