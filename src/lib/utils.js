import { MissionUtils } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_NUMBER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
} from "./constants.js";

export const readLineAsync = async (message) => {
  return await MissionUtils.Console.readLineAsync(message);
};

export const print = (message) => {
  MissionUtils.Console.print(message);
};

export const pickNumberInRange = (start, end) => {
  return MissionUtils.Random.pickNumberInRange(start, end);
};

export const splitIntoArray = (str, separator) => str.split(separator);

export const validatePositiveInteger = (num) => {
  if (Number.isNaN(num)) throw new Error(ERROR_MESSAGE_NOT_NUMBER);
  if (num <= 0) throw new Error(ERROR_MESSAGE_NOT_POSITIVE_POSITIVE);
  if (!Number.isInteger(num)) throw new Error(ERROR_MESSAGE_NOT_INTEGER);
};

export const getMapFilledZero = (array) => {
  const map = new Map();
  for (const item of array) {
    map.set(item, 0);
  }
  return map;
};

export const getRepeatedString = (str, repeatNum) => str.repeat(repeatNum);

export const getMaxValueInMap = (map) => Math.max(...map.values());

export const getKeyArrayHasTargetValueInMap = (map, targetValue) => {
  const array = [];
  for (const [key, value] of map) {
    if (value === targetValue) array.push(key);
  }
  return array;
};

export const checkArrayAllUnique = (array) => {
  return array.length === [...new Set(array)].length;
};
