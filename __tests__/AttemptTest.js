import AttemptValidator from '../src/validators/AttemptValidator.js';

describe('시도할 횟수 테스트 - [Error] 발생 상황', () => {
  test('시도할 횟수가 공백일 경우 에러가 발생합니다.', () => {
    const roundAttempt = '';
    expect(() => AttemptValidator.validate(roundAttempt)).toThrow(
      '[ERROR] 시도 횟수에 공백만 입력하시면 안됩니다.',
    );
  });

  test('시도할 횟수가 숫자가 아닐 경우 에러가 발생합니다.', () => {
    const roundAttempt = NaN;
    expect(() => AttemptValidator.validate(roundAttempt)).toThrow(
      '[ERROR] 숫자가 아닌 값을 입력하시면 안됩니다.',
    );
  });

  test('시도할 횟수가 1보다 작은 경우 에러가 발생합니다.', () => {
    const roundAttempt = 0;
    expect(() => AttemptValidator.validate(roundAttempt)).toThrow(
      '[ERROR] 1 이상의 숫자를 입력하시면 안됩니다.',
    );
  });
});

describe('시도할 횟수 테스트 - 정상 작동', () => {
  test('조건에 맞는 경우 에러를 발생하지 않습니다.', () => {
    const roundAttempt = 5;
    expect(() => AttemptValidator.validate(roundAttempt)).not.toThrow();
  });
});
