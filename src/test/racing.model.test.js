import { RacingModel } from '../racing/racing.model.js';

describe('RacingModel', () => {
  /** @type {RacingModel} */
  let racingModel;

  beforeEach(() => {
    racingModel = new RacingModel();
  });
  describe('setCarNames', () => {
    it('주어진 자동차의 이름들을 ,로 구분하여 각 자동차 이름이 5자 이하인 경우 에러는 발생하지 않아야 한다', () => {
      const carNames = 'pobi, pobi, pobi';

      expect(() => racingModel.setCars(carNames)).not.toThrow();
    });

    it('주어진 자동차의 이름들이 빈 값인 경우 에러를 발생시켜야만 한다', () => {
      const carNames = '';

      expect(() => racingModel.setCars(carNames)).toThrow(
        RacingModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
      );
    });

    it('주어진 자동차의 이름이 5자 초과인 경우 에러를 발생시켜야만 한다', () => {
      const carNames = 'pobi, pobipobi, pobi';

      expect(() => racingModel.setCars(carNames)).toThrow(
        RacingModel.ERROR_MESSAGE.CAR_NAME_LENGTH_IS_LESS_THAN_FIVE,
      );
    });
  });

  describe('setTrialNumber', () => {
    it('주어진 시도 횟수가 빈 값인 경우 에러를 발생시켜야만 한다', () => {
      const trialNumber = '';

      expect(() => racingModel.setTrialNumber(trialNumber)).toThrow(
        RacingModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
      );
    });
  });
});
