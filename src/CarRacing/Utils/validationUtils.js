import { ERROR_MESSAGES } from '../constants/constants.js';

function isInvalidNameLength(value) {
  if (value.length > 5 || value.length < 1) {
    return ERROR_MESSAGES['invalidLength'];
  }
  return null;
}

function isNotString(value) {
  if (/[^a-zA-Z]/.test(value)) {
    return ERROR_MESSAGES['notString'];
  }
  return null;
}

function hasDuplicateValues(values) {
  if (values.length !== new Set(values).size) {
    return ERROR_MESSAGES['duplicateValues'];
  }
  return null;
}

function hasMinimumLengthValues(values) {
  if (values.length < 2) {
    return ERROR_MESSAGES['minimumLength'];
  }
  return null;
}

function isNotNumber(value) {
  if (/\D/.test(value)) {
    return ERROR_MESSAGES['notNumber'];
  }
  return null;
}

function hasMinimumValue(value) {
  if (value < 1) {
    return ERROR_MESSAGES['minimumValue'];
  }
  return null;
}

export function throwError(validate) {
  if (validate) {
    throw new Error(`[ERROR] ${validate}`);
  }
}

export const ValidationUtils = {
  isInvalidNameLength,
  isNotString,
  hasDuplicateValues,
  hasMinimumLengthValues,
  isNotNumber,
  hasMinimumValue,
};
