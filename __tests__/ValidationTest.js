import Validation from '../src/Validation.js';

describe('유저 입력값 예외 처리를 검사하는 테스트', () => {
  test.each([
    ['woowa', true, '5자'],
    ['tech', true, '4자'],
    ['course', false, '5자 초과'],
    ['1', true, '1자'],
    ['123', true, '1자 이상 5자 이하'],
    ['', false, '1자 미만'],
    [' ', false, '공백 포함 1자'],
    ['5자 초과 이름', false, '공백 포함 5자 초과'],
    ['5자 이하', true, '공백 포함 5자'],
  ])('자동차 이름의 길이 예외 처리 테스트 (%s)', (name, expected) => {
    const ERROR_PREFIX = '[ERROR]';

    if (expected) {
      expect(() => Validation.isValidLength(name)).not.toThrow();
    } else {
      expect(() => Validation.isValidLength(name)).toThrow(ERROR_PREFIX);
    }
  });
});
