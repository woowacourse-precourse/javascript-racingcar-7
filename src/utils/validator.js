import OutputView from '../views/outputView.js';

const Validator = {
  validateCarCount(carNames) {
    if (!carNames || carNames.length === 0) {
      OutputView.throwError('자동차가 최소 1대 이상 있어야 합니다.');
    }
  },
};

export default Validator;
