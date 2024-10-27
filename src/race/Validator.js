import { ERROR_MESSAGE } from "../utils/ErrorMessage.js";

export function checkValidNameLength(name, maxLength) {
    if (name.length > maxLength) {
        throw new Error(ERROR_MESSAGE.NAME_LENGTH_EXCEEDED(maxLength, name));
    }
}

export function checkNotBlank(str) {
    if (!str) {
        throw new Error(ERROR_MESSAGE.EMPTY_INPUT_NOT_ALLOW);
    }
}

export function checkOnlyEnglishAndNumberCharacters(str) {
    if (!/^[a-zA-Z0-9]+$/.test(str)) {
        throw new Error(ERROR_MESSAGE.ONLY_USED_ENGLISH_AND_NUMBER(str));
    }
}

export function checkNumberValue(num) {
    if (!/^[0-9]+$/.test(num)) {
        throw new Error(ERROR_MESSAGE.ONLY_USED_NUMBER(num));
    }
}

export function checkLessThanOrEqualMaxCount(count, maxCount) {
    if (count > maxCount) {
        throw new Error(ERROR_MESSAGE.RACING_COUNT_EXCEEDED(maxCount, count));
    }
}

export function checkExistDuplicateName(names) {
    names.forEach((name, index) => {
        if (names.indexOf(name, index + 1) !== -1) {
            throw new Error(ERROR_MESSAGE.EXIST_DUPLICATE_NAME(name));
        }
    });
}
