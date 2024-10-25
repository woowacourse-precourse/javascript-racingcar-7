import { ERROR_MESSAGE } from './const';

const checkLengthError = (input) => {
  if (input.length > 5) throw new Error(ERROR_MESSAGE.LENGTH_ERROR);
};

const checkCountError = (input) => {
  if (input.length > 5) throw new Error(ERROR_MESSAGE.BIGNUM_ERROR);
};
const validateError = ({ car, count }) => {
  checkLengthError(car);
  checkCountError(count);
};
export default { validateError };
