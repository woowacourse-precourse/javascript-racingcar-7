import ErrorMessage from '../../resources/ErrorMessage.js';
import RegularExpression from '../../resources/RegularExpression.js';

function validateNotNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_NOT_NUMBER))
    throw new Error(ErrorMessage.INPUT_CONTAIN_CHARACTER);
}

function validateZeroNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_ONLY_ZERO))
    throw new Error(ErrorMessage.ZERO_NUMBER_INPUT);
}

function validateZeroStarting(repetitionString) {
  if (repetitionString.startsWith('0'))
    throw new Error(ErrorMessage.STARTSWITH_ZERO_FORMAT);
}

function validateNegativeNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_NEGATIVE_NUMBER))
    throw new Error(ErrorMessage.NEGATIVE_NUMBER_INPUT);
}

function validateDecimalNumber(repetitionString) {
  if (repetitionString.match(RegularExpression.REGEX_DECIMAL_NUMBER))
    throw new Error(ErrorMessage.DECIMAL_NUMBER_INPUT);
}

export default function validateRepetitionString(repetitionString) {
  if (!repetitionString) throw new Error(ErrorMessage.EMPTY_NUMBER_NOT_ALLOW);
  if (!repetitionString.match(RegularExpression.REGEX_VALID_NUMBER_FORMAT)) {
    validateNegativeNumber(repetitionString);
    validateDecimalNumber(repetitionString);
    validateZeroNumber(repetitionString);
    validateZeroStarting(repetitionString);
    validateNotNumber(repetitionString);
    throw new Error(ErrorMessage.UNKNOWN_INVALID_NUMBER);
  }
}
