import { MissionUtils } from '@woowacourse/mission-utils';
import {
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_NUMBER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
} from './constants.js';

export const readLineAsync = async message => {
  const response = MissionUtils.Console.readLineAsync(message);
  return response;
};

export const print = message => {
  MissionUtils.Console.print(message);
};

export const pickNumberInRange = (start, end) =>
  MissionUtils.Random.pickNumberInRange(start, end);

export const splitIntoArray = (str, separator) => str.split(separator);

export const getIsNumeric = num => {
  if (typeof num !== 'number') return false;
  return !Number.isNaN(num) && !Number.isNaN(parseFloat(num));
};

export const validatePositiveInteger = num => {
  const isNumeric = getIsNumeric(num);
  if (!isNumeric) throw new Error(ERROR_MESSAGE_NOT_NUMBER);

  const isPositiveNumeric = num > 0;
  if (!isPositiveNumeric) throw new Error(ERROR_MESSAGE_NOT_POSITIVE_POSITIVE);

  const isInteger = Number.isInteger(num);
  if (!isInteger) throw new Error(ERROR_MESSAGE_NOT_INTEGER);
};

export const getMapFilledZero = array => {
  const map = new Map();
  array.forEach(item => {
    map.set(item, 0);
  });
  return map;
};

export const getRepeatedString = (str, repeatNum) => str.repeat(repeatNum);

export const getMaxValueInMap = map => Math.max(...map.values());

export const getKeyArrayHasTargetValueInMap = (map, targetValue) => {
  const array = [];
  map.forEach((value, key) => {
    if (value === targetValue) array.push(key);
  });
  return array;
};

export const checkArrayAllUnique = array =>
  array.length === [...new Set(array)].length;
