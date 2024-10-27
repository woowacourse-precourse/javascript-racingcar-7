import { ERROR_MESSAGE } from "../Constants/constant.js";
import errorHandler from "../Error/errorHandler.js";

const isInvaildWordLength = (car) => {
  console.log(car.length);
  if (car.length > 6) {
    return true;
  }
  return false;
};

const isEmptyName = (car) => {
  if (car.length < 1) {
    return true;
  }
  return false;
};

const isSameNames = (namesList) => {
  const set = new Set(namesList);
  if (set.size !== namesList.length) {
    return true;
  }
  return false;
};

const isVaildNamesList = (carListArr) => {
  carListArr.forEach((car) => {
    if (isInvaildWordLength(car)) {
      errorHandler(ERROR_MESSAGE.invaildWordLength);
    } else if (isEmptyName(car)) {
      errorHandler(ERROR_MESSAGE.emptyName);
    }
  });
  if (isSameNames(carListArr)) errorHandler(ERROR_MESSAGE.duplicateName);

  return true;
};
export default isVaildNamesList;
