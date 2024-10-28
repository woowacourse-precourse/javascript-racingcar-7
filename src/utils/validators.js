import { ERROR_MESSAGE } from "../constants/messages.js";

const nameValidation = (carNames) => {
  const carNameSet = new Set(carNames);

  if (carNameSet.size !== carNames.length) {
    throw new Error(ERROR_MESSAGE.DUPLICATE_NAME_INPUT);
  }
  if (carNames.some((name) => name.trim() === "")) {
    throw new Error(ERROR_MESSAGE.EMPTY_NAME_INPUT);
  }

  if (carNames.length > 9) {
    throw new Error(ERROR_MESSAGE.OVER_TEN_INPUT);
  }

  carNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH_INPUT);
    }
  });
};

const tryValidation = (tryCount) => {
  const tryNumber = Number(tryCount);

  console.log(tryNumber);
  if (tryCount.trim() === "") {
    throw new Error(ERROR_MESSAGE.EMPTY_TRY_INPUT);
  }

  if (!Number.isInteger(tryNumber) || tryNumber === 0 || tryNumber < 0) {
    throw new Error(ERROR_MESSAGE.NAN_TRY_INPUT);
  }
};
export { nameValidation, tryValidation };
