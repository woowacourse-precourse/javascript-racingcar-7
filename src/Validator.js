import CauseError from './CauseError.js';
import { errorMessage } from './constants.js'

export default class Validator {
    // 사용자가 입력한 것이 비어있는지 체크
    static isEmpty(input) {
        if(!input)
            CauseError.causeError(errorMessage.inputEmptyErrorMessage);
    }
}