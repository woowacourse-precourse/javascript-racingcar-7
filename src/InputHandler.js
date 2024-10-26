import { Console } from '@woowacourse/mission-utils';
import { MAX_CARS, MAX_CAR_NAME_LENGTH, MAX_ATTEMPTS, ERROR_MESSAGES, INFO_MESSAGES, DELIMITERS } from './constants.js';

export const getCarNames = async () => {
    const carNames = await Console.readLineAsync(INFO_MESSAGES.CAR_NAME_PROMPT);
    const trimmedCarNames = carNames.split(DELIMITERS.CAR_NAME).map(car => car.trim());

    validateCarNames(trimmedCarNames);

    return trimmedCarNames;
}

const validateCarNames = (carNames) => {
    if (carNames.length > MAX_CARS) {
        throw new Error(ERROR_MESSAGES.TOO_MANY_CARS);
    }
    carNames.forEach((car) => {
        if (car.length === 0) {
            throw new Error(ERROR_MESSAGES.EMPTY_CAR_NAME);
        }
        if (car.length > MAX_CAR_NAME_LENGTH) {
            throw new Error(ERROR_MESSAGES.CAR_NAME_TOO_LONG);
        }
    });

    const deduplicatedCarNames = new Set(carNames);

    if (carNames.length !== deduplicatedCarNames.size) {
        throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
    }
}

export const getAttemptCount = async () => {
    const attemptCount = await Console.readLineAsync(INFO_MESSAGES.ATTEMPT_COUNT_PROMPT);

    validateAttemptCount(attemptCount);

    return Number(attemptCount);
}

const validateAttemptCount = (attemptCount) => {
    const count = Number(attemptCount);

    if (isNaN(count)) {
        throw new Error(ERROR_MESSAGES.INVALID_ATTEMPT_NUMBER);
    }
    else if (count < 1) {
        throw new Error(ERROR_MESSAGES.ATTEMPT_TOO_LOW);
    }
    else if (!Number.isInteger(count)) {
        throw new Error(ERROR_MESSAGES.ATTEMPT_NOT_INTEGER);
    }
    else if (count > MAX_ATTEMPTS) {
        throw new Error(ERROR_MESSAGES.ATTEMPT_TOO_HIGH);
    }
}