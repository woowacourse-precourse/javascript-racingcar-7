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
}

export default InputValidator;
