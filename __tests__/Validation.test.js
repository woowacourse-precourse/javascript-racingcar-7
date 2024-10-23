/* eslint-disable */

import App from '../src/App.js';
import isValidInput from '../src/NameValidation.js';
import {
  EMPTY_CAR_NAME_ERROR,
  ONE_CAR_NAME_ERROR,
  INVALID_SEPERATOR,
  MORE_THAN_FIVE_LETTERS,
  SAME_CAR_NAME_ERROR,
} from '../src/constants/Error.js';

describe('유효성 검사 테스트', () => {
  test('문자열 여러개를 쉼표로 구분지어 입력하면 그대로 반환한다.', () => {
    const validInput = 'pobi,woni';

    const app = new App();
    expect(app.isValidInput(validInput)).toBe(true);
  });
});

// Error Case
describe('유효하지 않은 값 테스트', () => {
  test('빈 값일 경우 에러를 반환한다.', () => {
    expect(() => isValidInput('')).toThrow(EMPTY_CAR_NAME_ERROR);
  });
  test('한 개의 값만 입력한 경우 에러를 반환한다.', () => {
    expect(() => isValidInput('john')).toThrow(ONE_CAR_NAME_ERROR);
  });
  test('쉼표 이외의 다른 값으로 구분했을 경우 에러를 반환한다.', () => {
    expect(() => isValidInput('john;mary')).toThrow(INVALID_SEPERATOR);
  });
  test('이름이 다섯글자 이상인 경우 에러를 반환한다.', () => {
    expect(() => isValidInput('Catherine, John')).toThrow(
      MORE_THAN_FIVE_LETTERS,
    );
  });
  test('중복된 이름이 있을 경우 에러를 반환한다.', () => {
    expect(() => isValidInput('John,John')).toThrow(SAME_CAR_NAME_ERROR);
  });
});
