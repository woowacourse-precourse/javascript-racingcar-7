import ErrorMessage from '../../resources/ErrorMessage.js';
import RegularExpression from '../../resources/RegularExpression.js';

function validateOneName(names) {
  if (names.match(RegularExpression.REGEX_SINGLE_NAME))
    throw new Error(ErrorMessage.MIN_TWO_NAMES_REQUIRED);
}

function validateLongName(names) {
  if (names.match(RegularExpression.REGEX_LONG_NAME))
    throw new Error(ErrorMessage.NAME_LENGTH_EXCEEDED);
}

function validateCommaEnding(names) {
  if (names.endsWith(',')) throw new Error(ErrorMessage.INVALID_NAME_FORMAT);
}

export default function validateNames(names) {
  if (!names) throw new Error(ErrorMessage.EMPTY_NAMES_NOT_ALLOW);
  if (!names.match(RegularExpression.REGEX_VALID_NAMES_FORMAT)) {
    validateOneName(names);
    validateLongName(names);
    validateCommaEnding(names);
    throw new Error(ErrorMessage.UNKNOWN_INVALID_NAMES);
  }
}
