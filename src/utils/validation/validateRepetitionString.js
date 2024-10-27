import ErrorMessage from '../../resources/ErrorMessage.js';
import RegularExpression from '../../resources/RegularExpression.js';

function validateNotNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_NOT_NUMBER))
    throw new Error(ErrorMessage.INVALID_NUMBER_INPUT);
}

function validateZeroNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_ONLY_ZERO))
    throw new Error(ErrorMessage.GREATER_THAN_ZERO);
}

function validateZeroStarting(repetitionString) {
  if (repetitionString.startsWith('0'))
    throw new Error(ErrorMessage.STARTSWITH_ZERO_FORMAT);
}

export default function validateRepetitionString(repetitionString) {
  if (!repetitionString) throw new Error(ErrorMessage.EMPTY_NAMES_NOT_ALLOW);
  if (!repetitionString.match(RegularExpression.REGEX_VALID_NUMBER_FORMAT)) {
    validateNotNumber(repetitionString);
    validateZeroNumber(repetitionString);
    validateZeroStarting(repetitionString);
    throw new Error(ErrorMessage.UNKNOWN_INVALID_NUMBERs);
  }
}
