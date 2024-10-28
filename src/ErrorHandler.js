import { NameError, RoundError } from './CustomError.js';

class ErrorHandler {
  static validateCarNames(carNames) {
    if (!carNames || carNames.length === 0) {
      throw new NameError('경주할 자동차 이름을 입력하세요.');
    }
    const uniqueNames = new Set();
    carNames.forEach((name) => {
      if (uniqueNames.has(name)) {
        throw new NameError('자동차 이름은 중복될 수 없습니다.');
      }
      if (name.length > 5) {
        throw new NameError('자동차 이름은 5자 이하만 가능합니다.');
      }
      uniqueNames.add(name);
    });
  }

  static validateRound(round) {
    if (round < 1) {
      throw new RoundError('시도할 회수는 1 이상이어야 합니다.');
    }
  }
}

export default ErrorHandler;
