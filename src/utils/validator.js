import OutputView from '../views/outputView.js';
import { ERROR_MESSAGES } from './constants.js';

const Validator = {
  validateCarCount(carNames) {
    if (!carNames || carNames.length === 0) {
      OutputView.throwError(ERROR_MESSAGES.NO_CARS);
    }
  },

  validateEmptyNames(carNames) {
    const hasEmptyName = carNames.some((name) => name.trim().length === 0);

    if (hasEmptyName) {
      OutputView.throwError(ERROR_MESSAGES.EMPTY_NAME);
    }
  },

  validateNameLength(carNames) {
    const hasLongName = carNames.some((name) => name.length > 5);

    if (hasLongName) {
      OutputView.throwError(ERROR_MESSAGES.NAME_TOO_LONG);
    }
  },

  validateDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length) {
      OutputView.throwError(ERROR_MESSAGES.DUPLICATE_NAME);
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
      OutputView.throwError(ERROR_MESSAGES.EMPTY_ROUNDS);
    }
  },

  validateIsNumber(rounds) {
    const number = Number(rounds);
    if (Number.isNaN(number)) {
      OutputView.throwError(ERROR_MESSAGES.NOT_A_NUMBER);
    }
  },

  validateIsNotNegative(rounds) {
    const number = Number(rounds);
    if (number < 0) {
      OutputView.throwError(ERROR_MESSAGES.NEGATIVE_NUMBER);
    }
  },

  validateIsNotZero(rounds) {
    const number = Number(rounds);
    if (number === 0) {
      OutputView.throwError(ERROR_MESSAGES.ZERO_ROUNDS);
    }
  },

  validateIsInteger(rounds) {
    const number = Number(rounds);
    if (!Number.isInteger(number)) {
      OutputView.throwError(ERROR_MESSAGES.NOT_INTEGER);
    }
  },

  validateIsNotOverflow(rounds) {
    const number = Number(rounds);
    if (number > Number.MAX_SAFE_INTEGER) {
      OutputView.throwError(ERROR_MESSAGES.OVERFLOW);
    }
  },

  validateGameRounds(rounds) {
    this.validateEmptyGameRounds(rounds);
    this.validateIsNumber(rounds);
    this.validateIsNotNegative(rounds);
    this.validateIsNotZero(rounds);
    this.validateIsInteger(rounds);
    this.validateIsNotOverflow(rounds);
  },
};

export default Validator;
