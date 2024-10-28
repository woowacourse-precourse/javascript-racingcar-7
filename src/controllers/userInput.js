import { InputCarName, InputTryNumber } from "../view/ConsoleView.js";
import InputValidator from "../utils/InputValidator.js";
import Parser from "../utils/Parser.js";
import { validateTryNumber } from "../utils/validateTryNumber.js";

export const userInput = async () => {
  try {
    const carNames = await InputCarName();
    InputValidator.isEmpty(carNames);

    const tryNumber = await InputTryNumber();
    InputValidator.isEmpty(tryNumber);

    const parsedTryNumber = Parser.parseNumber(tryNumber);
    validateTryNumber(parsedTryNumber);

    return { carNames, parsedTryNumber };
  } catch (error) {
    throw error;
  }
};
