import { ERROR_MESSAGE } from "./constants.js";

function isRepeat(arr) {
  const isError = arr.some((element) => {
    return arr.indexOf(element) !== arr.lastIndexOf(element)
  });
  if (isError) throw Error(ERROR_MESSAGE.NAME_IS_REPEATED);
}

function isBlank(arr) {
  const isError = arr.some((element) => {
    return element.length == 0
  });
  if (isError) throw Error(ERROR_MESSAGE.NAME_IS_BLANK);
}

function isOver5(arr) {
  const isError = arr.some((element) => {
    return element.length > 5
  });
  if (isError) throw Error(ERROR_MESSAGE.NAME_IS_OVER_5);
}

export function isValidName(nameList) {
  isRepeat(nameList);
  isBlank(nameList);
  isOver5(nameList);
}

export function isValidNumber(tryTime) {
  if (parseInt(tryTime) < 1)
    throw Error(ERROR_MESSAGE.NUMBER_IS_UNDER_1);
  if (Number.isNaN(parseInt(tryTime)))
    throw Error(ERROR_MESSAGE.NUMBER_IS_NOT_ENTERED);
  if (tryTime.includes('.'))
    throw Error(ERROR_MESSAGE.NUMBER_IS_DECIMAL);
}
