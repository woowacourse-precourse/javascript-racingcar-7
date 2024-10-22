import { INPUT_ERROR } from '../src/constants/errorMessages';
import CarsInputParser from '../src/features/CarsInput/parser';
import { validateCars } from '../src/features/CarsInput/validations';

jest.mock('../src/utils/throwError', () =>
  jest.fn(message => {
    throw new Error(`[ERROR] ${message}`);
  }),
);

describe('features/CarsInput/parser', () => {
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

describe('features/CarsInput/validations', () => {
  it.each([
    ['   ', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 입력값이 공백만 있을 때
    [', , ,', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 입력값이 모두 비어있을 때
    [',', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 쉼표만 입력
    ['a,b,c,', `[ERROR] ${INPUT_ERROR.EMPTY_STRING}`], // 이름이 없는 차가 있을 때
    ['longlong,a,b', `[ERROR] ${INPUT_ERROR.CAR_NAME_TOO_LONG}`], // 이름이 5자를 초과할 때
  ])('should throw an error for invalid input "%s"', (input, expectedError) => {
    // when
    const carsArray = CarsInputParser(input);

    // then
    expect(() => validateCars(carsArray)).toThrow(expectedError);
  });
});
