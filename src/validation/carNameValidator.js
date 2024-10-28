import { splitCarNames } from "../car/splitCarNames.js";

export const carNameValidator = (carNames) => {
  const carNameArr = splitCarNames(carNames);
  const validation = { result: true, message: "", names: carNameArr };

  return validation;
};
