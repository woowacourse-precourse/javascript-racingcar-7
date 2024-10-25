import { splitByComma } from '../utils/stringUtils.js';
import {
  checkDuplicateNames,
  checkIsNull,
  checkOnlyAlphabetAndComma,
  checkOnlyNumber,
  checkValidNameLength,
  checkValidRange,
} from './validator.js';

const pipeline = function pipelineFunc(functions, input) {
  return functions.reduce((result, fn) => fn(result), input);
};

const validateForRacingCars = function validateForRacingCarsFunc(input) {
  return pipeline(
    [
      checkIsNull,
      checkOnlyAlphabetAndComma,
      splitByComma,
      checkValidNameLength,
      checkDuplicateNames,
    ],
    input,
  );
};

const validateForTryCount = function validateForRacingCarsFunc(input) {
  return pipeline([checkIsNull, checkOnlyNumber, checkValidRange], input);
};

export { validateForRacingCars, validateForTryCount };
