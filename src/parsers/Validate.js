import { ERROR_MESSAGE } from '../const/index.js';

const checkLengthError = (carInput) => {
  carInput.forEach((car) => {
    if (String(car).length > 5) throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
  });
};
const checkCarCountError = (carInput) => {
  if (carInput.length > 100)
    throw new Error(ERROR_MESSAGE.LENGTH_CARCOUNT_ERROR);
};

const checkCountError = (countInput) => {
  if (countInput > 10000) throw new Error(ERROR_MESSAGE.COUNT_ERROR);
};

const checkCarRepeat = (carInput) => {
  const uniqueCars = new Set(carInput);
  if (uniqueCars.size !== carInput.length) {
    throw new Error(ERROR_MESSAGE.COUNT_ERROR);
  }
};
export const validateInput = ({ car, count }) => {
  checkLengthError(car);
  checkCarCountError(car);
  checkCarRepeat(car);
  checkCountError(count);
};
