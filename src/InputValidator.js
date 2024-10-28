import { ERROR_MESSAGES } from './const.js';

class InputValidator {
    static validateCarNames(carNames) {
        const names = carNames.split(',').map(name => name.trim());
        names.forEach(name => {
            if (name.length > 5 || name.length === 0) {
                throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
            }
        });
        return names;
    }

    static validateRaceAttempts(attempts) {
        const attemptNumber = parseInt(attempts, 10);
        if (isNaN(attemptNumber) || attemptNumber <= 0) {
            throw new Error(ERROR_MESSAGES.INVALID_RACE_ATTEMPTS);
        }
        return attemptNumber;
    }
}

export default InputValidator;
