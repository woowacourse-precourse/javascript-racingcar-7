import { isEmpty, startsWithComma, endsWithComma, isDuplicatedComma, hasNameLongerThanFive, isValidAttemptCount, hasDuplicatedName } from './utils/validateInput.js';
import { ERROR } from './utils/constants.js';

const userInputValidator = (input) => {
    if (isEmpty(input)) {
        throwError(ERROR.ERROR_EMPTY_INPUT);
    } else if (startsWithComma(input)) {
        throwError(ERROR.ERROR_STARTS_WITH_COMMA);
    } else if (endsWithComma(input)) {
        throwError(ERROR.ERROR_ENDS_WITH_COMMA);
    } else if (isDuplicatedComma(input)) {
        throwError(ERROR.ERROR_DUPLICATED_COMMA);
    }
};

const eachNameLengthValidator = (nameList) => {
    if (hasNameLongerThanFive(nameList)) {
        throwError(ERROR.ERROR_NAME_TOO_LONG);
    } else if (hasDuplicatedName(nameList)) {
        throwError(ERROR.ERROR_DUPLICATED_NAME);
    }
};

const attemptCountValidator = (input) => {
    if (!isValidAttemptCount(input)) {
        throwError(ERROR.ERROR_INVALID_ATTEMPT_COUNT);
    }
};

function throwError(message) {
    throw new Error(`[ERROR]: ${message}`);
};

export { userInputValidator, eachNameLengthValidator, attemptCountValidator };