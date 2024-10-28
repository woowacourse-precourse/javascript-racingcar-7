import { CAR_NAME_ERROR_MESSAGE } from "./Message.js";

const MAX_NAME_LENGTH = 5;

export const validateName = (name) => {
  if (name.length > MAX_NAME_LENGTH) {
    throw new Error(CAR_NAME_ERROR_MESSAGE.carNameTooLong);
  }
  if (name.trim() === "") {
    throw new Error(CAR_NAME_ERROR_MESSAGE.carNameEmpty);
  }
  return name;
};
