import ErrorMessages from "../constant/ErrorMessage";

class CarNamesValidator {
    checkCarNamesLength(carNames) {
        carNames.forEach((name) => {
            if (name.length > 5) {
                throw new Error(ErrorMessages.CAR_NAME_LENGTH);
            }
        });
    }

    checkEmptyCarNames(carNames) {
        carNames.forEach((name) => {
            if (name === "" || name === null) {
                throw new Error(ErrorMessages.CAR_NAME_EMPTY);
            }
        });
    }

    checkDuplicateCarNames(carNames) {
        const uniqueCarNames = new Set(carNames);
        if (uniqueCarNames.size !== carNames.length) {
            throw new Error(ErrorMessages.CAR_NAME_DUPLICATE);
        }
    }

    checkCarNamesOnce(carNames) {
        if (carNames.length < 2) {
            throw new Error(ErrorMessages.MINIMUM_NUMBER_OF_CAR);
        }
    }

    validateCarNames(carNames) {
        this.checkCarNamesLength(carNames);
        this.checkEmptyCarNames(carNames);
        this.checkDuplicateCarNames(carNames);
        this.checkCarNamesOnce(carNames);
    }
}
export default CarNamesValidator;