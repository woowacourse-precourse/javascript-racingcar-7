import ErrorMessages from "../constant/ErrorMessage";

class CountNumValidator {
    checkCountNumIsCharacter(countNum) {
        if (isNaN(countNum)) {
            throw new Error(ErrorMessages.COUNT_NUM_POSITIVE);
        }
    }

    checkCountNumIsNegative(countNum) {
        if (countNum <= 0) {
            throw new Error(ErrorMessages.COUNT_NUM_POSITIVE);
        }
    }

    checkCountNumIsEmpty(countNum) {
        if (countNum === "") {
            throw new Error(ErrorMessages.COUNT_NUM_POSITIVE);
        }
    }

    validateCountNum(countNum) {
        this.checkCountNumIsCharacter(countNum);
        this.checkCountNumIsEmpty(countNum);
        this.checkCountNumIsNegative(countNum);
    }
}
export default CountNumValidator;