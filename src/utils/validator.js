import { ERROR_MESSAGES } from '../constants/errors.js';

class Validator {
  static validateCarNames(names) {
    this.#validateDuplicate(names);

    names.split(',').map((name) => {
      this.#validateIsEmptyName(name);
      this.#validateLengthName(name);
    });
  }

  // 자동차 이름이 중복되는지 확인
  static #validateDuplicate(names) {
    const unique = new Set(names.split(','));
    if (unique.size !== names.split(',').length) {
      throw new Error(ERROR_MESSAGES.INVALID_DUPLICATE_CARNAME);
    }
  }

  // 자동차 이름이 빈 문자열인지 확인
  static #validateIsEmptyName(name) {
    if (name === '') {
      throw new Error(ERROR_MESSAGES.INVALID_EMPTY_CARNAME);
    }
  }

  // 자동차 이름의 길이가 5자를 초과하는지 확인
  static #validateLengthName(name) {
    if (name.length > 5) {
      throw new Error(ERROR_MESSAGES.INVALID_LENGTH_CARNAME);
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
