import ErrorMessages from "../constant/ErrorMessage";

class CountNumValidator {
    checkCountNumIsNonePositiveNumber(countNum) {
        if (isNaN(countNum) || countNum <= 0 || countNum === "") {
            throw new Error(ErrorMessages.COUNT_NUM_POSITIVE);
        }
    }

    validateCountNum(countNum) {
        this.checkCountNumIsNonePositiveNumber(countNum);
    }
}
export default CountNumValidator;