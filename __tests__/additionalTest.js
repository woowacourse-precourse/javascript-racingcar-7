import { validateName, validateTryCount } from '../src/validation';

describe('자동차 경주', () => {
  test('예외처리 테스트', async () => {
    // given
    const names = ['asdfgh', 'hjk'];

    // then
    await expect(() => validateName(names)).toThrow(
      '[ERROR] 자동차 이름은 5자 이하만 가능합니다.'
    );
  });

  test('함수 테스트', async () => {
    // given
    const names = ['asdf', ''];

    // then
    await expect(() => validateName(names)).toThrow(
      '[ERROR] 자동차 이름은 1자 이상이어야 합니다.'
    );
  });

  test.each([
    [0, '[ERROR] 시도 횟수는 1이상이어야 합니다.'],
    ['asdf', '[ERROR] 시도 횟수는 숫자여야 합니다.'],
  ])('시도 횟수에 대한 예외처리', async (count, ErrorMessage) => {
    await expect(() => validateTryCount(count)).toThrow(ErrorMessage);
  });
});
