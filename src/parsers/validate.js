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
  // 빈 문자열을 제외한 요소들만으로 Set을 생성해 중복 검사
  const uniqueCars = new Set(carInput.filter((car) => car !== ''));

  if (uniqueCars.size !== carInput.filter((car) => car !== '').length) {
    throw new Error(ERROR_MESSAGE.REPEAT_ERROR);
  }
};

export const validateInput = ({ car, count }) => {
  checkLengthError(car);
  checkCarCountError(car);
  checkCarRepeat(car);
  checkCountError(count);
};
