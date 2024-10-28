import ERROR from '../../constants/Error.js';

export default class InputValidator {
  static validateInputIsNull (input) {
    if (input === '' || input === null) {
      throw new Error(ERROR.INPUT_IS_NULL);
    }
  }
}
