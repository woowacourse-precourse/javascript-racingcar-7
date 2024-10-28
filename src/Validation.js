import {
    ERROR
} from './Message.js';

export function validateName(names) {
    for (const name of names) {
        if (name === '') {
            throw new Error(ERROR.nameNull);
        }

        if (name.length > 5) {
            throw new Error(ERROR.nameLength);
        }
    }
    if (new Set(names).size !== names.length) {
        throw new Error(ERROR.nameDuplicate);
    }
}

export function validateTryCount(tryCount) {
    if (tryCount === '') {
        throw new Error(ERROR.tryCountNull);
    }
    if (isNaN(tryCount)) {
        throw new Error(ERROR.tryCountNan);
    }
    if (tryCount < 0) {
        throw new Error(ERROR.tryCountMin);
    }
}