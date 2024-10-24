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

const validateRacingCountType = (input) => {
  if (Number.isNaN(Number(input))) {
    throw new Error(ERROR_MESSAGE.attemptNumber.invalidType);
  }
};

const validateRacingCountNumber = (input) => {
  if (!NUMBER_REGEX.test(input)) {
    throw new Error(ERROR_MESSAGE.attemptNumber.invalidInteger);
  }
};

export {
  validateInputBlank,
  validateCarNameOverlap,
  validateCarNameLength,
  validateRacingCountType,
  validateRacingCountNumber,
};
