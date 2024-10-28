import { inputValidator } from '../src/inputValidator';

describe('자동차 이름 유효성 테스트', () => {
  test('빈 이름 입력 시 예외', () => {
    expect(() => inputValidator.checkCarsNameValidate('')).toThrow(
      '[ERROR] 입력이 비어 있습니다.'
    );
  });

  test('중복된 이름 입력 시 예외', () => {
    expect(() => inputValidator.checkCarsNameValidate('hi,hi')).toThrow(
      '[ERROR] 중복된 자동차 이름이 있습니다.'
    );
  });

  test('공백 이름 입력 시 예외', () => {
    expect(() => inputValidator.checkCarsNameValidate('hi, ,hi')).toThrow(
      '[ERROR] 빈 이름이 포함되어 있습니다.'
    );
  });

  test('자동차 이름 글자수가 1~5자가 아닐 시 예외', () => {
    expect(() => inputValidator.checkCarsNameValidate('hi,hellohello')).toThrow(
      '[ERROR] 이름의 글자수가 1~5자가 아닙니다.'
    );
  });
});

describe('시도 횟수 유효성 테스트', () => {
  test('빈 입력 시 예외', () => {
    expect(() => inputValidator.checkTryNumberValidate('')).toThrow(
      '[ERROR] 입력이 비어 있습니다.'
    );
  });

  test('숫자가 아닌 입력 시 예외', () => {
    expect(() => inputValidator.checkTryNumberValidate('abc')).toThrow(
      '[ERROR] 숫자 입력이 아닙니다.'
    );
  });

  test('양의 정수가 아닐 경우 예외', () => {
    expect(() => inputValidator.checkTryNumberValidate('-11')).toThrow(
      '[ERROR] 음수 입력은 불가합니다.'
    );
    expect(() => inputValidator.checkTryNumberValidate('0')).toThrow(
      '[ERROR] 0은 허용되지 않습니다.'
    );
    expect(() => inputValidator.checkTryNumberValidate('2.5')).toThrow(
      '[ERROR] 정수가 아닙니다.'
    );
  });
});
