import NumValidation from '../src/utils/NumValidation.js';
import { INVALID_NUMBER, TOO_BIG_NUMBER } from '../src/constants/Error.js';

describe('시도횟수 유효성 테스트', () => {
  let numValidation;

  beforeEach(() => {
    numValidation = new NumValidation();
  });
  test('1 이상의 시도횟수를 입력하면 유효하게 반환한다.', () => {
    expect(numValidation.isValidNum('5')).toBe(true);
  });
});

describe('유효하지 않은 시도횟수 테스트', () => {
  let numValidation;

  beforeEach(() => {
    numValidation = new NumValidation();
  });

  test('시도횟수에 0을 입력하면 오류를 반환한다.', () => {
    expect(() => numValidation.isValidNum('0')).toThrow(INVALID_NUMBER);
  });

  test('너무 큰 숫자를 입력하면 오류를 반환한다.', () => {
    expect(() => numValidation.isValidNum('9999999999999')).toThrow(
      TOO_BIG_NUMBER,
    );
  });
});
