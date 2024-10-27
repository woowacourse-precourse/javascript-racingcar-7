import { Console } from '@woowacourse/mission-utils';

const ERROR_MESSAGE = '[ERROR]';
const MAX_NAME_LENGTH = 5;

const throwError = () => {
  Console.print(ERROR_MESSAGE);
  throw new Error(ERROR_MESSAGE);
};

const validateCarNameLength = (cars) => {
  return cars.some((car) => car.length <= 0 || car.length > MAX_NAME_LENGTH);
};

export const validateInput = (cars, attemptCount) => {
  if (validateCarNameLength(cars)) {
    throwError();
  }
  if (!attemptCount) {
    throwError();
  }
};
