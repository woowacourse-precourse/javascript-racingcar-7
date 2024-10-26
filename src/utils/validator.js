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
};

export default Validator;
