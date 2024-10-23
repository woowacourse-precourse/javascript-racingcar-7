import { ERROR_MESSAGE } from "./constants/message.js";

const NUMBER_REGEX = /^[1-9]\d*$/;

const validateInputBlank = (input) => {
  if (input === null || input === undefined || input === "") {
    throw new Error(ERROR_MESSAGE.blank);
  }
};
