const { ATTEMPT_ERROR_MESSAGE } = require('../constants/messages');
const { validateAttempts } = require('./validateAttempts');

describe('시도할 횟수 유효성 검증 테스트', () => {
  test.each([
    ['-1', ATTEMPT_ERROR_MESSAGE.OUT_OF_RANGE, '음수'],
    ['', ATTEMPT_ERROR_MESSAGE.NO_INPUT, '빈 값'],
    ['a', ATTEMPT_ERROR_MESSAGE.NOT_A_NUMBER, '숫자가 아닌 값'],
  ])('%s를 입력하면 에러를 던진다. (%s)', (input, message) => {
    expect(() => validateAttempts(input)).toThrow(message);
  });
});
