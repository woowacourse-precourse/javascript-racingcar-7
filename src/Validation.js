import { ERROR_MESSAGE, RACE_NUMBER } from "./constant.js";
class Validation {
  static checkCarName(arr) {
    if (arr.length === 1 && arr[0] === '') {
        throw new Error(ERROR_MESSAGE.NOTHING);
    }

        if (arr.length < RACE_NUMBER.MIN_ARR_LENGTH) {
            throw new Error(ERROR_MESSAGE.DEFICIENCY);
        }

        if (arr.length !== new Set(arr).size) {
            throw new Error(ERROR_MESSAGE.DUPLICATION);
        }

        arr.forEach((car) => {
            if (car === '') {
                throw new Error(ERROR_MESSAGE.EMPTY);
            }

            if (car.length > RACE_NUMBER.MAX_NAME_LENGTH) {
                throw new Error(ERROR_MESSAGE.OVER_LENGTH);
            }
        });
    }

    static checkMoveCount(input) {
        if (input === '') {
            throw new Error(ERROR_MESSAGE.NOTHING);
        }

        if (Number.isNaN(Number(input))) {
            throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        }

        if (!Number.isInteger(Number(input))) {
            throw new Error(ERROR_MESSAGE.NOT_INTEGER);
        }

        if (Number(input) < 1) {
            throw new Error(ERROR_MESSAGE.SMALL_NUMBER);
        }
    }
}

export default Validation;