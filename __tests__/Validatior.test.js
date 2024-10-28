import CarValidator from '../src/Validator/CarValidator.js';
import CountValidator from '../src/Validator/CountValidator.js';
import ERROR_MESSAGES from '../src/constants/errorMessages.js';

describe('자동차 이름 입력 예외 테스트', () => {
  test.each([[''], ['Tom,,Ben']])(
    '자동차 이름에 빈 문자열이 포함될 경우 에러를 발생시킨다. (%s)',
    (inputCars) => {
      expect(() => CarValidator.validateCars(inputCars)).toThrow(
        ERROR_MESSAGES.EMPTY_CAR_NAME
      );
    }
  );

  test.each([['Max ,Sam'], ['M ax,Jack'], ['Anna, Lucy']])(
    '자동차 이름에 공백이 포함될 경우 에러를 발생시킨다. (%s)',
    (inputCars) => {
      expect(() => CarValidator.validateCars(inputCars)).toThrow(
        ERROR_MESSAGES.CONTAINS_WHITESPACE
      );
    }
  );

  test('한 대 이하의 자동차 이름을 입력한 경우 에러를 발생시킨다.', () => {
    const SINGLE_CAR_NAME = 'Lucy';

    expect(() => CarValidator.validateCars(SINGLE_CAR_NAME)).toThrow(
      ERROR_MESSAGES.LESS_THAN_TWO_CARS
    );
  });

  test('중복된 자동차 이름을 입력한 경우 에러를 발생시킨다.', () => {
    const DUPLICATE_CAR_NAME = 'Lily,Lily';

    expect(() => CarValidator.validateCars(DUPLICATE_CAR_NAME)).toThrow(
      ERROR_MESSAGES.DUPLICATE_CAR_NAME
    );
  });

  test('자동차 이름을 5자 초과로 입력한 경우 에러를 발생시킨다.', () => {
    const LONG_CAR_NAME = 'Max,Ema,MiaMia';

    expect(() => CarValidator.validateCars(LONG_CAR_NAME)).toThrow(
      ERROR_MESSAGES.CAR_NAME_TOO_LONG
    );
  });
});

describe('시도할 횟수 입력 예외 테스트', () => {
  test('시도할 횟수를 입력하지 않은 경우 에러를 발생시킨다.', () => {
    const EMPTY_COUNT = '';

    expect(() => CountValidator.validateCount(EMPTY_COUNT)).toThrow(
      ERROR_MESSAGES.EMPTY_COUNT
    );
  });

  test.each([['a'], ['#']])(
    '정수가 아닌 값을 입력한 경우 에러를 발생시킨다. (%s)',
    (inputCount) => {
      expect(() => CountValidator.validateCount(inputCount)).toThrow(
        ERROR_MESSAGES.NOT_A_NUMBER
      );
    }
  );

  test.each([['0'], ['-3']])(
    '1 이상의 횟수를 입력하지 않은 경우 에러를 발생시킨다. (%s)',
    (inputCount) => {
      expect(() => CountValidator.validateCount(inputCount)).toThrow(
        ERROR_MESSAGES.LESS_THAN_ONE
      );
    }
  );
});
