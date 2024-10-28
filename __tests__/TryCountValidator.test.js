import validateTryCount from '../src/validators/TryCountValidator';

describe('시도 횟수 유효성 검사', () => {
  test('양의 정수일 때 유효성 검사가 통과됩니다.', () => {
    const input = '5';
    expect(validateTryCount(input)).toBe(5);
  });

  test('음수일 경우 오류가 발생합니다.', () => {
    const input = '-1';
    expect(() => validateTryCount(input)).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
  });

  test('정수가 아닌 입력값에 대해 오류가 발생합니다.', () => {
    const input = 'abc';
    expect(() => validateTryCount(input)).toThrow('[ERROR] 시도 횟수는 양의 정수여야 합니다.');
  });
});
