import Validator from '../src/Validator.js';

describe('자동차 이름 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('공백이 있을 시, 공백 제거 후 반환', () => {
    // given
    const input = 'so ri';
    const expectedOutput = 'sori';

    // when
    const result = validator.validateCarName(input);

    // then
    expect(result).toBe(expectedOutput);
  });

  // given
  const testcases = [
    {
      title: '5자 초과 시, 예외 발생',
      input: 'longName',
      result: '[ERROR] 이름은 5자 이하만 가능합니다.',
    },
    {
      title: '한글 또는 영어가 아닌 다른 것을 입력할 경우, 예외 발생',
      input: '123!',
      result: '[ERROR] 이름은 한글 또는 영어만 가능합니다.',
    },
  ];

  testcases.forEach(({ title, input, result }) => {
    test(title, () => {
      // when & then
      expect(() => validator.validateCarName(input)).toThrow(result);
    });
  });
});

describe('시도 횟수 검증 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  // given
  const testcases = [
    {
      title: '숫자가 아닐 시, 예외 발생',
      input: 'five',
      result: '[ERROR] 횟수는 숫자만 입력 가능합니다.',
    },
    {
      title: '정수가 아닐 시, 예외 발생',
      input: '2.5',
      result: '[ERROR] 횟수는 정수만 입력 가능합니다.',
    },
    {
      title: '0일 경우, 예외 발생',
      input: '0',
      result: '[ERROR] 횟수는 1회 이상부터 가능합니다.',
    },
    {
      title: '음수일 경우, 예외 발생',
      input: '-5',
      result: '[ERROR] 횟수는 자연수만 가능합니다.',
    },
  ];

  testcases.forEach(({ title, input, result }) => {
    test(title, () => {
      // when & then
      expect(() => validator.validateAttempt(input)).toThrow(result);
    });
  });
});
