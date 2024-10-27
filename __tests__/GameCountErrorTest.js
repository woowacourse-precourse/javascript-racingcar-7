import { GAME_VALIDATION } from '../src/Validator/gameValidation.js';

describe('GAME_VALIDATION', () => {
  test('게임 횟수는 숫자만 입력할 수 있습니다.', () => {
    expect(() => GAME_VALIDATION('a')).toThrow(
      '[ERROR] 게임 횟수는 숫자만 입력할 수 있습니다.',
    );
  });
  test('1번 이상의 게임 횟수를 입력해주세요.', () => {
    expect(() => GAME_VALIDATION(0)).toThrow(
      '[ERROR] 1번 이상의 게임 횟수를 입력해주세요.',
    );
  });
  test('50번 이하의 게임 횟수를 입력해주세요.', () => {
    expect(() => GAME_VALIDATION(100)).toThrow(
      '[ERROR] 50번 이하의 게임 횟수를 입력해주세요.',
    );
  });
  test('정상 작동.', () => {
    expect(() => GAME_VALIDATION(3)).not.toThrow();
  });
});
