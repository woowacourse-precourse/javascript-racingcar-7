import CarRacingInputValidator from '../src/validator/CarRacingInputValidator';
import ERROR_MESSAGES from '../src/utills/errors';

describe('CarRacingInputValidator', () => {
  test('validateNotEmpty: 빈 문자열을 입력 시 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateNotEmpty('');
    }).toThrow(ERROR_MESSAGES.INPUT.EMPTY_INPUT);
  });

  test('validateCarNames: 빈 문자열의 자동차 이름이 있을 시 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateCarNames('pobi, , jun');
    }).toThrow(ERROR_MESSAGES.INPUT.EMPTY_CAR_NAME);
  });

  test('validateCarNames: 자동차 이름이 5글자를 초과할 경우 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateCarNames('pobi,supercar,jun');
    }).toThrow(ERROR_MESSAGES.INPUT.INVALID_CAR_NAME);
  });

  test('validateCarNames: 중복된 자동차 이름이 있을 경우 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateCarNames('pobi,jun,pobi');
    }).toThrow(ERROR_MESSAGES.INPUT.DUPLICATE_CAR_NAME);
  });

  test('validateTotalRounds: 시도 횟수가 숫자가 아닐 경우 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateTotalRounds('abc');
    }).toThrow(ERROR_MESSAGES.INPUT.INVALID_NUMBER);
  });

  test('validateTotalRounds: 시도 횟수가 1보다 작은 경우 에러', () => {
    expect(() => {
      CarRacingInputValidator.validateTotalRounds('0');
    }).toThrow(ERROR_MESSAGES.INPUT.INVALID_ROUNDS);
  });

  test('validateTotalRounds: 올바른 입력', () => {
    expect(() => {
      CarRacingInputValidator.validateTotalRounds('5');
    }).not.toThrow();
  });
});
