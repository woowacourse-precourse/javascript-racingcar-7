import NumberOfTry from '../../src/domain/NumberOfTry';

describe('시도할 횟수 테스트', () => {
  const ERROR_MESSAGE = {
    empty: '[ERROR] 빈 문자열입니다.',
    character: '[ERROR] 숫자가 아닌 문자를 입력했습니다.',
    range: '[ERROR] 1 이상의 숫자를 입력해주세요.',
  };

  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => new NumberOfTry(INPUT)).toThrow(ERROR_MESSAGE.empty);
  });

  test.each([['1e1'], ['\n'], ['1.5'], ['6-4'], ['4/2'], ['+-1'], ['-+1']])(
    '숫자가 아닌 문자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new NumberOfTry(input)).toThrow(ERROR_MESSAGE.character);
    },
  );

  test.each([['0'], ['-1'], ['-2']])(
    '0 이하의 숫자를 입력하면 에러가 발생한다.',
    (input) => {
      expect(() => new NumberOfTry(input)).toThrow(ERROR_MESSAGE.range);
    },
  );

  test.each([
    ['7', 7],
    ['+100', 100],
  ])('유효성 검사에서 문제가 없으면 숫자가 반환된다.', (input, output) => {
    // when
    const number = new NumberOfTry(input).getNumberOfTry();

    // then
    expect(number).toBe(output);
  });
});
