import { Car } from "../models/Car.js";
import { MESSAGES } from "../config/config.js";

export const setCarNames = (nameList) => {
  if (nameList.length === 0) {
    throw new Error(MESSAGES.ERROR_INPUT_EMPTY);
  }

  let carList = [];

  for (const name of nameList) {
    carList.push(new Car(name));
  }

  return carList;
};
