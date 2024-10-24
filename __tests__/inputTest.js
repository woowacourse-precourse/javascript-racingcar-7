import Validator from '../src/Validator.js';
import { carNameInputCase, countInputCase } from './inputTestCase.js';

describe('입력 테스트', () => {
  test.each(carNameInputCase)('자동차 입력 %s에 대한 테스트', ({ input, expected, throwError }) => {
    if (throwError) {
      expect(() => Validator.validCarInput(input)).toThrow(expected);
      return;
    }
    expect(Validator.validCarInput(input)).toEqual(expected);
  });

  test.each(countInputCase)('횟수 입력 %s에 대한 테스트', ({ input, expected, throwError }) => {
    if (throwError) {
      expect(() => Validator.validCountInput(input)).toThrow(expected);
      return;
    }
    expect(Validator.validCountInput(input)).not.toThrow();
  });
});
