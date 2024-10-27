import { CAR_NAME_ERROR, TRY_COUNT_ERROR } from "./constants/Message";

class Validator {
    isValidCarName(carNames) {
        for (let car of carNames) {
            if (car.length > 5) {
                throw new Error(CAR_NAME_ERROR.OVER_LENGTH);
            }
        }
    }

    isValidTryCount(tryCount) {
        if (isNaN(tryCount) || Number(tryCount) <= 0) {
            throw new Error(TRY_COUNT_ERROR.NOT_NUMBER);
        }
    }
}

export default Validator;
