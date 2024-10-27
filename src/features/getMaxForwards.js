import { MESSAGES } from "../config/config";

export const getMaxForwards = (carList) => {
  let result = [];
  let maxForward = 0;

  if (carList.length === 0) {
    throw new Error(MESSAGES.ERROR_INPUT_EMPTY);
  }

  for (let car of carList) {
    if (car.forwardCount > maxForward) {
      result = [car.name];
      maxForward = car.forwardCount;
    } else if (car.forwardCount === maxForward) {
      result.push(car.name);
    }
  }

  return result;
};
