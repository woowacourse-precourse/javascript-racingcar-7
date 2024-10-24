import { hasSpecialCharacter } from '../common/stringUtil.js';
import { ERROR_MESSAGE } from '../common/message.js';
import { CAR } from './constant.js';

class Car {
  constructor(name = '') {
    if (!name) throw new Error(ERROR_MESSAGE.ERROR_EMPTY_CAR_NAME);
    if (!this._isValidNameLength(name)) throw new Error(ERROR_MESSAGE.ERROR_TOO_LONG_CAR_NAME);
    if (hasSpecialCharacter(name)) throw new Error(ERROR_MESSAGE.ERROR_NOT_ALLOWED_CHARACTER);
    this._name = name;
    this._count = 0;
  }

  _isValidNameLength(string) {
    return string.length <= CAR.MAX_LENGTH;
  }
}

export default Car;
