import { CAR_NAME_ERROR, TRY_COUNT_ERROR } from "./constants/Message.js";

class Validator {
    checkCarName(carNames) {
        if (carNames.some((car) => car.length > 5)) {
            throw new Error(CAR_NAME_ERROR.OVER_LENGTH);
        }

        if (carNames.some((car) => car.length === 0)) {
            throw new Error(CAR_NAME_ERROR.NO_NAMED_CAR);
        }
    }

    checkTryCount(tryCount) {
        if (isNaN(tryCount)) {
            throw new Error(TRY_COUNT_ERROR.NOT_NUMBER);
        }

        if (tryCount <= 0) {
            throw new Error(TRY_COUNT_ERROR.MINUS_OR_ZERO);
        }
    }
}

export default Validator;
