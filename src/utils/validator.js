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
};

export default Validator;
