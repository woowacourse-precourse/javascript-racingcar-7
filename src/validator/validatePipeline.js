import {
  checkDuplicateNames,
  checkIsNull,
  checkOnlyAlphabetCommaAndNumber,
  checkOnlyNumber,
  checkValidNameLength,
  checkValidRange,
  checkCarCountLimit,
} from './validator.js';

const pipeline = function pipelineFunc(functions, input) {
  return functions.reduce((result, fn) => fn(result), input);
};

const validateRacingCarInput = function validateRacingCarInputFunc(input) {
  return pipeline([checkIsNull, checkOnlyAlphabetCommaAndNumber], input);
};

const validateCarNames = function validateCarNamesFunc(input) {
  return pipeline(
    [checkValidNameLength, checkDuplicateNames, checkCarCountLimit],
    input,
  );
};

const validateTryCount = function validateTryCountFunc(input) {
  return pipeline([checkIsNull, checkOnlyNumber, checkValidRange], input);
};

export { validateRacingCarInput, validateCarNames, validateTryCount };
