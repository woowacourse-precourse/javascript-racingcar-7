import { validateName, validateTryCount } from '../src/validation';

describe('자동차 경주 입출력 예외처리', () => {
  test.each([
    ['asdfgh,hjk', '[ERROR] 자동차 이름은 5자 이하만 가능합니다.'],
    ['asdf,', '[ERROR] 자동차 이름은 1자 이상이어야 합니다.'],
    ['', '[ERROR] 자동차 이름은 빈값이 올 수 없습니다.'],
    ['asdf.', '[ERROR] 자동차 이름의 특수문자는 쉼표(,)만 허용됩니다.'],
    ['asdf#$', '[ERROR] 자동차 이름의 특수문자는 쉼표(,)만 허용됩니다.'],
  ])('자동차 이름이  경우 예외처리', async (names, expectedError) => {
    await expect(() => validateName(names)).toThrow(expectedError);
  });

  test.each([
    [0, '[ERROR] 시도 횟수는 1이상이어야 합니다.'],
    ['asdf', '[ERROR] 시도 횟수는 숫자여야 합니다.'],
    ['', '[ERROR] 시도 횟수는 빈값이 올 수 없습니다.'],
  ])('시도 횟수에 대한 예외처리', async (count, ErrorMessage) => {
    await expect(() => validateTryCount(count)).toThrow(ErrorMessage);
  });
});
