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

const validateAttemptCount = (count) => {
  // 숫자가 아니거나(문자열), 0 이하이거나, 소수점이 있는 경우
  const attemptCount = Number(count);
  return (
    !count ||
    isNaN(attemptCount) ||
    attemptCount <= 0 ||
    !Number.isInteger(attemptCount)
  );
};

export const validateInput = (cars, attemptCount) => {
  if (validateCarNameLength(cars)) {
    throwError();
  }
  if (!attemptCount) {
    throwError();
  }
  if (validateAttemptCount(attemptCount)) {
    throwError();
  }
};
