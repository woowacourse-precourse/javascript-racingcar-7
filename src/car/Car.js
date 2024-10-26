import { Random, Console } from '@woowacourse/mission-utils';
import { hasSpecialCharacter } from '../common/stringUtil';
import { ERROR_MESSAGE } from '../common/message';
import CAR from './constant';

class Car {
  constructor(name = '') {
    if (!name) throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    if (name.length > CAR.NAME_MAX_LENGTH) throw new Error(ERROR_MESSAGE.TOO_LONG_CAR_NAME);
    if (hasSpecialCharacter(name)) throw new Error(ERROR_MESSAGE.NOT_ALLOWED_CHARACTER);
    this.name = name;
    this.count = 0;
  }

  tryMove() {
    const num = Random.pickNumberInRange(CAR.RUN_RANDOM_RANGE_MIN, CAR.RUN_RANDOM_RANGE_MAX);
    if (num >= CAR.RUN_CONDITION_VALUE) this.count += 1;
  }

  peekResult() {
    Console.print(`${this.name} : ${'-'.repeat(this.count)}`);
  }
}

export default Car;
