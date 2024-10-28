import HandleError from './Error.js';
import Validation from './Validation.js';

const valid = new Validation();

function getValidChallengerNameList(input) {
  if (valid.isValidNamesInput(input)) {
    return getSplitedListByComma(input).filter((name) =>
      valid.isValidNameInput(name)
    );
  }
}

function getValidAttemptValue(input) {
  if (valid.isValidInputAttempValue(input)) return Number(input);
}

function getSplitedListByComma(input) {
  const COMMA_REGEX = new RegExp(',');

  if (COMMA_REGEX.test(input)) {
    return input.split(',');
  }

  return [input];
}

export { getValidChallengerNameList, getValidAttemptValue };
