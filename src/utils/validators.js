import ERRORS from "../datas/error";

export const validateCarNames = (carNames) => {
  const trimmedNames = carNames.map((name) => name.trim());

  if (trimmedNames.some((name) => name === '')) {
    throw new Error(ERRORS.EMPTY_CAR_NAME);
  }

  const nameArray = [];
  trimmedNames.forEach((name) => {
    if (name.length > 5) {
      throw new Error(ERRORS.INVALID_CAR_NAME);
    }
    if (nameArray.includes(name)) {
      throw new Error(ERRORS.DUPLICATE_CAR_NAME);
    }
    nameArray.push(name);
  });
};

export const validateTrialCount = (count) => {
  if (count == null || isNaN(count) || count <= 0) {
    throw new Error(ERRORS.INVALID_TRIAL_COUNT);
  }
};
