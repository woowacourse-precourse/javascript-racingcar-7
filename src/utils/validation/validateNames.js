import ErrorMessage from '../../resources/ErrorMessage.js';

function validateOneName(names) {
  if (names.match(/^[^,]{1,5}$/))
    throw new Error(ErrorMessage.MIN_TWO_NAMES_REQUIRED);
}

function validateLongName(names) {
  if (names.match(/^[^,]+(,[^,]+)*$/))
    throw new Error(ErrorMessage.NAME_LENGTH_EXCEEDED);
}

function validateCommaEnding(names) {
  if (names.endsWith(',')) throw new Error(ErrorMessage.INVALID_NAME_FORMAT);
}

export default function validateNames(names) {
  if (!names) throw new Error(ErrorMessage.EMPTY_NAMES_NOT_ALLOW);
  if (!names.match(/^[^,]{1,5}(,[^,]{1,5})+$/)) {
    validateOneName(names);
    validateLongName(names);
    validateCommaEnding(names);
    throw new Error(ErrorMessage.UNKNOWN_INVALID_NAMES);
  }
}
