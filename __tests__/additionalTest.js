import { validateName } from '../src/validation';

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
});
