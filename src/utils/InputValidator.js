import { ERROR_MESSAGES } from "../constants/Messages.js";

class InputValidator {
    static validateCarNames(carNames) {
        if (carNames.some(name => !name || name.trim() === "")) {
            throw new Error(ERROR_MESSAGES.EMPTY_NAME);
        }

        const uniqueNames = new Set(carNames);
        if (uniqueNames.size !== carNames.length) {
            throw new Error(ERROR_MESSAGES.DUPLICATE_NAME);
        }
    }

    static validateAttempts(input) {
        const attempts = parseInt(input, 10);
        if (isNaN(attempts) || attempts <= 0) {
            throw new Error(ERROR_MESSAGES.INVALID_ATTEMPTS);
        }
        return attempts;
    }
}

export default InputValidator;