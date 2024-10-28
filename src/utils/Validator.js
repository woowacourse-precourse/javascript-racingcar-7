import CauseError from './CauseError.js';
import { errorMessage } from '../constants.js'

export default class Validator {

    // 글자 길이 체크
    static isFiveOrLess(carName) {
        if(carName.length == 0||carName.length > 5)
            CauseError.causeError(errorMessage.isFiveOrMoreErrorMessage);   
    }

    static checkInputTime(inputTime) {
        this.isEmpty(inputTime);
        this.isNumber(inputTime);
        this.isZero(inputTime);
    }

    static isEmpty(input) {
        if(!input)
            CauseError.causeError(errorMessage.inputEmptyErrorMessage);
    }

    static isNumber(inputTime) {
        if(isNaN(inputTime))
            CauseError.causeError(errorMessage.isNotNuberErrorMessage);
    }

    static isZero(inputTime) {
        if(inputTime == 0)
            CauseError.causeError(errorMessage.isZeroErrorMessage);
    }
}