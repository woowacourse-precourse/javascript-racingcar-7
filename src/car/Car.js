import { Random } from '@woowacourse/mission-utils';
import { hasSpecialCharacter } from '../common/stringUtil.js';
import { ERROR_MESSAGE } from '../common/message.js';
import { CAR } from './constant.js';

class Car {
  constructor(name = '') {
    if (!name) throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    if (!this._isValidNameLength(name)) throw new Error(ERROR_MESSAGE.TOO_LONG_CAR_NAME);
    if (hasSpecialCharacter(name)) throw new Error(ERROR_MESSAGE.NOT_ALLOWED_CHARACTER);
    this._name = name;
    this._count = 0;
  }

  _isValidNameLength(string) {
    return string.length <= CAR.NAME_MAX_LENGTH;
  }

  moveOrStop() {
    const num = Random.pickNumberInRange(CAR.RUN_RANDOM_RANGE_MIN, CAR.RUN_RANDOM_RANGE_MAX);
    if (num >= CAR.RUN_CONDITION_VALUE) this._count++;
  }

  getName() {
    return this._name;
  }

  getCount() {
    return this._count;
  }
}

export default Car;
