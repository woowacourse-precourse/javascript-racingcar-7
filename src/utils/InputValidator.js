import { ERROR_MESSAGE, STATIC_NUMBER } from "../static/Static.js";

const InputValidator = {
  validateCarNames(names) {
    if (!names || names.trim() === "") {
      throw new Error(ERROR_MESSAGE.name.EMPTY);
    }

    const carNames = names.split(",").map((name) => name.trim());

    if (carNames.some((name) => name === "")) {
      throw new Error(ERROR_MESSAGE.name.BLANK);
    }

    if (carNames.length < STATIC_NUMBER.name.MIN_COUNT) {
      throw new Error(ERROR_MESSAGE.name.MIN_COUNT);
    }

    if (carNames.some((name) => name.length > STATIC_NUMBER.name.MAX_LENGTH)) {
      throw new Error(ERROR_MESSAGE.name.LENGTH);
    }

    if (new Set(carNames).size !== carNames.length) {
      throw new Error(ERROR_MESSAGE.name.DUPLICATE);
    }

    return carNames;
  },

  validateAttempts(attempts) {
    if (!attempts || attempts.trim() === "") {
      throw new Error(ERROR_MESSAGE.attempts.EMPTY);
    }

    if (isNaN(attempts.trim())) {
      throw new Error(ERROR_MESSAGE.attempts.NOT_NUMBER);
    }

    const number = Number(attempts);

    if (number <= 0) {
      throw new Error(ERROR_MESSAGE.attempts.ZERO_OR_NEGATIVE);
    }

    return number;
  },
};

export default InputValidator;
