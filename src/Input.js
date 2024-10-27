import { Console } from '@woowacourse/mission-utils';

class Input {

  constructor(validate) {
    this.validate = validate;
    this.value = '';
  }
  async enterValue(message) {
    const value = await Console.readLineAsync(message);

    this._validateValue(value);

    this.value = value;
  }

  _validateValue(value) {
    this.validate(value);
  }

  getValue() {
    return this.value;
  }
}

export default Input;
