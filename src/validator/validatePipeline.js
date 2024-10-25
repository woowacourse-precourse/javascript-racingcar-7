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

const validateRacingCarInput = function validateRacingCarInputFunc(input) {
  return pipeline([checkIsNull, checkOnlyAlphabetAndComma], input);
};

const validateCarNames = function validateCarNamesFunc(input) {
  return pipeline([checkValidNameLength, checkDuplicateNames], input);
};

const validateTryCount = function validateTryCountFunc(input) {
  return pipeline([checkIsNull, checkOnlyNumber, checkValidRange], input);
};

export { validateRacingCarInput, validateCarNames, validateTryCount };
