import validateCarNames from '../src/validators/CarNameValidator';

describe('자동차 이름 유효성 검사', () => {
  test('자동차 이름이 5자 이하일 때 유효성 검사가 통과됩니다.', () => {
    const input = 'pobi,woni,jun';
    expect(validateCarNames(input)).toEqual(['pobi', 'woni', 'jun']);
  });

  test('자동차 이름 중 5자를 초과하는 이름이 포함될 경우 오류가 발생합니다.', () => {
    const input = 'pobi,woni,jun12345';
    expect(() => validateCarNames(input)).toThrow(
      '[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다.',
    );
  });

  test('입력값이 쉼표로 구분된 이름 목록일 때 공백을 제거하고 유효성 검사를 통과합니다.', () => {
    const input = ' pobi , woni , jun ';
    expect(validateCarNames(input)).toEqual(['pobi', 'woni', 'jun']);
  });
});
