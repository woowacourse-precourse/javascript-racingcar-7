import Validator from '../lib/Validator.js';
import { mockRandoms } from '../lib/testUtils.js';

import { RuleModel } from '../rule/rule.model.js';

describe('RuleModel', () => {
  /** @type {RuleModel} */
  let ruleModel;

  beforeEach(() => {
    ruleModel = new RuleModel(new Validator());
  });
  describe('parseCarNames', () => {
    it("자동차 이름 문자열을 받는 경우 ','로 구분하여 자동차 이름 배열을 반환해야한다", () => {
      const value = 'pobi, woo, jun';

      const result = ruleModel.parseCarNames(value);

      expect(result).toEqual(['pobi', 'woo', 'jun']);
    });

    it('자동차 이름 앞, 뒤에 공백이 포함되는 경우 공백을 제거한 배열을 반환해야한다', () => {
      const value = '  pobi,   woo   ,jun   ';

      const result = ruleModel.parseCarNames(value);

      expect(result).toEqual(['pobi', 'woo', 'jun']);
    });

    it.each([
      { value: 'pobi, ,jun', expectedResult: ['pobi', 'jun'] },
      { value: 'pobi,jun, ', expectedResult: ['pobi', 'jun'] },
      { value: ' ,pobi,jun', expectedResult: ['pobi', 'jun'] },
    ])(
      '자동차 이름이 없는 경우가 포함되는 경우 공백에 제외된 배열을 반환해야한다',
      ({ value, expectedResult }) => {
        const result = ruleModel.parseCarNames(value);

        expect(result).toEqual(expectedResult);
      },
    );
  });

  describe('validateCarNames', () => {
    it('빈 값이 입력된 경우 에러를 발생시켜야한다', () => {
      const value = '';

      expect(() => ruleModel.validateCarNames(value)).toThrow(
        RuleModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
      );
    });

    it('자동차 이름이 5자 초과인 경우 에러를 발생시켜야한다', () => {
      const value = 'pobi, pobiRacer';

      expect(() => ruleModel.validateCarNames(value)).toThrow(
        RuleModel.ERROR_MESSAGE.CAR_NAME_LENGTH_IS_LESS_THAN_FIVE,
      );
    });
  });

  describe('validateTrialNumber', () => {
    it('빈 값이 입력된 경우 에러를 발생시켜야한다', () => {
      const value = '';

      expect(() => ruleModel.validateTrialNumber(value)).toThrow(
        RuleModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
      );
    });

    it('음수가 입력된 경우 에러를 발생시켜야한다', () => {
      const value = '-5';

      expect(() => ruleModel.validateTrialNumber(value)).toThrow(
        RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_IS_POSITIVE_INTEGER,
      );
    });

    it('0이 입력된 경우 에러를 발생시켜야한다', () => {
      const value = '0';

      expect(() => ruleModel.validateTrialNumber(value)).toThrow(
        RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_IS_POSITIVE_INTEGER,
      );
    });

    it('정수가 아닌 수가 입력된 경우 에러를 발생시켜야한다', () => {
      const value = '0.12';

      expect(() => ruleModel.validateTrialNumber(value)).toThrow(
        RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_IS_POSITIVE_INTEGER,
      );
    });
  });

  describe('canMoveForward', () => {
    it('랜덤 숫자가 주어진 이동 가능 숫자 이상인 경우 true를 반환해야한다', () => {
      mockRandoms([RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.CAN_MOVE_FORWARD]);

      const result = ruleModel.canMoveForward();

      expect(result).toBe(true);
    });

    it('랜덤 숫자가 주어진 이동 가능 숫자 미만인 경우 false를 반환해야한다', () => {
      mockRandoms([RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.CAN_MOVE_FORWARD - 1]);

      const result = ruleModel.canMoveForward();

      expect(result).toBe(false);
    });
  });
});
