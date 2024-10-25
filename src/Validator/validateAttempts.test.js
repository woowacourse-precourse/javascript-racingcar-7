const { ATTEMPT_ERROR_MESSAGE } = require('../constants/messages');
const { validateAttempts } = require('./validateAttempts');

describe('시도할 횟수 유효성 검증 테스트', () => {
  test('빈 값으로 입력하면 에러를 던진다.', () => {
    expect(() => validateAttempts('')).toThrow(ATTEMPT_ERROR_MESSAGE.NO_INPUT);
  });

  test('숫자가 아닌 값을 입력하면 에러를 던진다.', () => {
    expect(() => validateAttempts('a')).toThrow(
      ATTEMPT_ERROR_MESSAGE.NOT_A_NUMBER
    );
  });

  test.each([
    ['-1', '음수'],
    ['0', '최소값 미만'],
    ['10', '최대값 초과'],
  ])('%s를 입력하면 에러를 던진다. (%s)', (input) => {
    expect(() => validateAttempts(input)).toThrow(
      ATTEMPT_ERROR_MESSAGE.OUT_OF_RANGE
    );
  });
});
