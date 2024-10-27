import ErrorMessage from '../../resources/ErrorMessage.js';

function validateNotNumber(repetitionString) {
  if (repetitionString.match(/[^0-9]+/))
    throw new Error(ErrorMessage.INVALID_NUMBER_INPUT);
}

function validateZeroNumber(repetitionString) {
  if (repetitionString.match(/^[0]$/))
    throw new Error(ErrorMessage.GREATER_THAN_ZERO);
}

function validateZeroStarting(repetitionString) {
  if (repetitionString.startsWith('0'))
    throw new Error(ErrorMessage.STARTSWITH_ZERO_FORMAT);
}

export default function validateRepetitionString(repetitionString) {
  if (!repetitionString) throw new Error(ErrorMessage.EMPTY_NAMES_NOT_ALLOW);
  if (!repetitionString.match(/^[1-9](\d+)*$/)) {
    validateNotNumber(repetitionString);
    validateZeroNumber(repetitionString);
    validateZeroStarting(repetitionString);
    throw new Error(ErrorMessage.UNKNOWN_INVALID_NUMBERs);
  }
}
