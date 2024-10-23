import { ERROR_MESSAGE } from "./constants/message.js";

const NUMBER_REGEX = /^[1-9]\d*$/;

const validateInputBlank = (input) => {
  if (input === null || input === undefined || input === "") {
    throw new Error(ERROR_MESSAGE.blank);
  }
};

const validateCarNameOverlap = (input) => {
  if (new Set(input).size !== input.length) {
    throw new Error(ERROR_MESSAGE.carName.invalidOverlap);
  }
};

const validateCarNameLength = (input) => {
  if (input.length > 5) {
    throw new Error(ERROR_MESSAGE.carName.invalidLength);
  }
};

export { validateInputBlank, validateCarNameOverlap, validateCarNameLength };
