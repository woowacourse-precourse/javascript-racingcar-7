import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, IO_MESSAGE } from '../constants/message';

async function Input() {
    const carNamesInput = await Console.readLineAsync(IO_MESSAGE.INPUT_CARNAME);
    const attemptsInput = await Console.readLineAsync(IO_MESSAGE.INPUT_ATTEMPTS);

    const carNames = carNamesInput.split(',')
        .map(name => name.trim())
        .filter(name => name !== '');

    const attempts = Number(attemptsInput);

    if (carNames.length === 0) {
        throw new Error(ERROR_MESSAGE.ERROR_EMPTY_CAR_NAME);
    }

    if (carNames.length < 1 || carNames.length > 5) {
        throw new Error(ERROR_MESSAGE.ERROR_INVALID_CAR_COUNT);
    }

    if (carNames.some(name => name.length < 2 || name.length > 5)) {
        throw new Error(ERROR_MESSAGE.ERROR_CAR_NAME_LENGTH);
    }

    if (isNaN(attempts) || attempts < 1 || attempts > 10) {
        throw new Error(ERROR_MESSAGE.ERROR_INVALID_ATTEMPTS);
    }

    return { carNames, attempts };
}

export default Input;
