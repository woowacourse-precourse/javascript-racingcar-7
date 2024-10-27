import { formatErrorMessage } from "./util.js";
import { MESSAGES } from "./constant.js";

export function validateRoundInput(inputRound) {
    if (isNaN(inputRound) || inputRound === null || inputRound.trim() === "")
        throw Error(formatErrorMessage(MESSAGES.ERROR_INPUT_NUMBER));
    else if (inputRound < 0)
        throw Error(formatErrorMessage(MESSAGES.ERROR_ROUND_MINIMUM));
}

export function validateName(name) {
    if (name.length > 5)
        throw Error(formatErrorMessage(MESSAGES.ERROR_NAME_LENGTH));
    else if(name === '')
        throw Error(formatErrorMessage(MESSAGES.ERROR_NAME_NULL));
}
