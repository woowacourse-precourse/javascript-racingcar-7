import Validation from '../src/Validation.js';

describe('유저 입력값 예외 처리를 검사하는 테스트', () => {
  test.each([
    ['woowa', true],
    ['tech', true],
    ['course', false],
    ['1', true],
    ['123', true],
    ['', false],
    [' ', false],
    ['5자 초과 이름', false],
    ['5자 이하', true],
  ])('자동차 이름 길이를 예외 처리하는 함수 테스트', (name, expected) => {
    const ERROR_PREFIX = '[ERROR]';

    if (expected) {
      expect(() => Validation.isValidLength(name)).not.toThrow();
    } else {
      expect(() => Validation.isValidLength(name)).toThrow(ERROR_PREFIX);
    }
  });
});
