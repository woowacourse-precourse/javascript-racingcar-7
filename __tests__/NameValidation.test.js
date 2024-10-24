/* eslint-disable */
import NameValidation from '../src/utils/NameValidation.js';
import {
  EMPTY_CAR_NAME_ERROR,
  ONE_CAR_NAME_ERROR,
  MORE_THAN_FIVE_LETTERS,
  SAME_CAR_NAME_ERROR,
} from '../src/constants/Error.js';

describe('유효성 검사 테스트', () => {
  test('문자열 여러 개를 쉼표로 구분지어 입력하면 true를 반환한다.', () => {
    expect(NameValidation.isValid('pobi,woni')).toBe(true);
  });
});

// Error Case
describe('유효하지 않은 값 테스트', () => {
  test('빈 값일 경우 에러를 반환한다.', () => {
    expect(() => NameValidation.isValid('')).toThrow(EMPTY_CAR_NAME_ERROR);
  });
  test('한 개의 값만 입력한 경우 에러를 반환한다.', () => {
    expect(() => NameValidation.isValid('john')).toThrow(ONE_CAR_NAME_ERROR);
  });

  test('이름이 다섯글자 이상인 경우 에러를 반환한다.', () => {
    expect(() => NameValidation.isValid('Catherine, John')).toThrow(
      MORE_THAN_FIVE_LETTERS,
    );
  });
  test('중복된 이름이 있을 경우 에러를 반환한다.', () => {
    expect(() => NameValidation.isValid('John,John')).toThrow(
      SAME_CAR_NAME_ERROR,
    );
  });
});
