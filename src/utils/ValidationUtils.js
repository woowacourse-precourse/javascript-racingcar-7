import ErrorCode from "../datas/ErrorCode.js";

class ValidationUtils {

    static checkDuplicate(arr) {
        return new Set(arr).size !== arr.length;
    }

    static isValidNumber(num) {
        const formattedNumber = Number(num)
        if (Number.isNaN(formattedNumber)) {
            throw new Error(ErrorCode.TRY_NUMBER_NOT_NUMBER)
        }

        if (formattedNumber < 1) {
            throw new Error(ErrorCode.TRY_NUMBER_TOO_SMALL)
        }
        return formattedNumber
    }

}

export default ValidationUtils;