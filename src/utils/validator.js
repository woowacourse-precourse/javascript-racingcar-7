import { ERROR_MESSAGES } from '../constants/errors.js';

class Validator {
  static validateCarNames(names) {
    // 자동차 이름이 중복되는지 확인
    this.validateDuplicate(names);

    names.split(',').map((name) => {
      // 자동차 이름이 빈 문자열인지 확인
      if (name === '') {
        throw new Error(ERROR_MESSAGES.INVALID_EMPTY_CARNAME);
      }
    });
  }

  static validateDuplicate(names) {
    const unique = new Set(names.split(','));
    if (unique.size !== names.split(',').length) {
      throw new Error(ERROR_MESSAGES.INVALID_DUPLICATE_CARNAME);
    }
  }

  static validateGameCount(input) {
    const gameCount = Number(input);

    // 입력받은 횟수가 숫자인지 확인
    if (isNaN(gameCount)) {
      throw new Error(ERROR_MESSAGES.INVALID_GAME_COUNT_TYPE);
    }

    // 입력받은 횟수가 0 이상인지 확인
    if (gameCount < 0) {
      throw new Error(ERROR_MESSAGES.INVALID_GAME_COUNT);
    }
  }
}

export default Validator;
