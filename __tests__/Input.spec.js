import { MAX_COUNT } from '../src/constants/count';
import { INPUT_ERROR } from '../src/constants/errorMessages';
import CarsInputParser from '../src/features/CarsInput/parser';
import validateCars from '../src/features/CarsInput/validations';
import validateCount from '../src/features/CountInput/validations';

jest.mock('../src/utils/throwError', () =>
  jest.fn(message => {
    throw new Error(`[ERROR] ${message}`);
  }),
);

describe('features/CarsInput', () => {
  describe('parser', () => {
    it.each([
      ['a,b,c', ['a', 'b', 'c']],
      ['a, b, c', ['a', 'b', 'c']], // 공백 포함
      ['one', ['one']], // 값이 1개
    ])('should parse "%s" into %s', (input, expected) => {
      // when
      const result = CarsInputParser(input);
      // then
      expect(result).toEqual(expected);
    });
  });

  describe('validations', () => {
    it.each([
      ['   ', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 입력값이 공백만 있을 때
      [', , ,', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 입력값이 모두 비어있을 때
      [',', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 쉼표만 입력
      ['a,b,c,', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 이름이 없는 차가 있을 때
      ['longlong,a,b', `[ERROR] ${INPUT_ERROR.CAR_NAME_TOO_LONG}`], // 이름이 5자를 초과할 때
    ])(
      'should throw an error for invalid input "%s"',
      (input, expectedError) => {
        // when
        const carsArray = CarsInputParser(input);

        // then
        expect(() => validateCars(carsArray)).toThrow(expectedError);
      },
    );
  });
});

describe('features/CountInput', () => {
  it.each([
    ['10', null], // 정상 입력
    ['a', `[ERROR] ${INPUT_ERROR.INVALID_NUMBER}`], // 숫자가 아닌 문자열
    ['-2', `[ERROR] ${INPUT_ERROR.NEGATIVE_NUMBER}`], // 음수
    [`${MAX_COUNT + 10}`, `[ERROR] ${INPUT_ERROR.COUNT_TOO_BIG}`], // MAX_COUNT보다 큰 숫자
  ])('should throw an error for invalid input "%s"', (input, expectedError) => {
    if (expectedError) {
      expect(() => validateCount(input)).toThrow(expectedError);
    } else {
      expect(() => validateCount(input)).not.toThrow();
    }
  });
});
