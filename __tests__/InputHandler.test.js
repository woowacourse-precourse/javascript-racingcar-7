import { validateInputStrings } from '../src/validations/InputValidation.js';
import { VALIDATION_ERROR_MESSAGE } from '../src/constants/constants.js';

describe('InputHandler 테스트', () => {
  test('올바른 입력인 경우 검증을 통과해야 합니다.', () => {
    expect(() => validateInputStrings('pobi,crong,honux')).not.toThrow();
  });

  test('빈 문자열이 입력된 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => validateInputStrings('')).toThrow(
      VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE,
    );
  });

  test('공백이 포함된 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => validateInputStrings('pobi, crong,honux')).toThrow(
      VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE,
    );
  });
  test('null이 포함된 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => validateInputStrings(null)).toThrow(
      VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE,
    );
  });
  test('undefined가 포함된 경우 예외를 발생시켜야 합니다.', () => {
    expect(() => validateInputStrings(undefined)).toThrow(
      VALIDATION_ERROR_MESSAGE.INCLUDE_EMPTY_SPACE,
    );
  });
});
