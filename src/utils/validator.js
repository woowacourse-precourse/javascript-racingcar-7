import OutputView from '../views/outputView.js';

const Validator = {
  validateCarCount(carNames) {
    if (!carNames || carNames.length === 0) {
      OutputView.throwError('자동차가 최소 1대 이상 있어야 합니다.');
    }
  },

  validateEmptyNames(carNames) {
    const hasEmptyName = carNames.some((name) => name.trim().length === 0);

    if (hasEmptyName) {
      OutputView.throwError('자동차 이름은 빈 문자열이나 공백일 수 없습니다.');
    }
  },

  validateNameLength(carNames) {
    const hasLongName = carNames.some((name) => name.length > 5);

    if (hasLongName) {
      OutputView.throwError('자동차 이름은 5자 이하만 가능합니다.');
    }
  },

  validateDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length) {
      OutputView.throwError('자동차 이름은 중복될 수 없습니다.');
    }
  },

  validateCarNames(carNames) {
    this.validateCarCount(carNames);
    this.validateEmptyNames(carNames);
    this.validateNameLength(carNames);
    this.validateDuplicateNames(carNames);
  },

  validateEmptyGameRounds(rounds) {
    if (!rounds || rounds.trim().length === 0) {
      OutputView.throwError('시도 횟수는 빈 값이나 공백일 수 없습니다.');
    }
  },

  validateIsNumber(rounds) {
    const number = Number(rounds);
    if (Number.isNaN(number)) {
      OutputView.throwError('시도 횟수는 숫자여야 합니다.');
    }
  },

  validateIsNotNegative(rounds) {
    const number = Number(rounds);
    if (number < 0) {
      OutputView.throwError('시도 횟수는 음수일 수 없습니다.');
    }
  },

  validateIsNotZero(rounds) {
    const number = Number(rounds);
    if (number === 0) {
      OutputView.throwError('시도 횟수는 0일 수 없습니다.');
    }
  },

  validateIsInteger(rounds) {
    const number = Number(rounds);
    if (!Number.isInteger(number)) {
      OutputView.throwError('시도 횟수는 정수여야 합니다.');
    }
  },

  validateIsNotOverflow(rounds) {
    const number = Number(rounds);
    if (number > Number.MAX_SAFE_INTEGER) {
      OutputView.throwError(
        `시도 횟수는 ${Number.MAX_SAFE_INTEGER}보다 작거나 같아야 합니다.`,
      );
    }
  },
};

export default Validator;
