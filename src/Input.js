import { Console } from '@woowacourse/mission-utils';

class Input {
  constructor(validate) {
    this.validate = validate;
  }
  async enterValue(message) {
    const value = await Console.readLineAsync(message);

    this._validateValue(value);

    return value;
  }

  _validateValue(value) {
    this.validate(value);
  }
}

export default Input;
