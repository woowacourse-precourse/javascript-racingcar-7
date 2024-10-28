import Cars from '../../src/domain/Cars';

describe('경주할 자동차 이름 테스트', () => {
  const ERROR_MESSAGE = {
    empty: '[ERROR] 빈 문자열입니다.',
    size: '[ERROR] 2개 이상의 자동차 이름을 입력해주세요.',
    length:
      '[ERROR] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 1자 이상 5자 이하만 가능합니다.',
    duplication: '[ERROR] 중복된 자동차 이름이 있습니다.',
  };

  test('빈 문자열이면 에러가 발생한다.', () => {
    // given
    const INPUT = '';

    // then
    expect(() => new Cars(INPUT)).toThrow(ERROR_MESSAGE.empty);
  });

  test('자동차 이름을 하나만 입력하면 에러가 발생한다.', () => {
    // given
    const INPUT = '피아트';

    // then
    expect(() => new Cars(INPUT)).toThrow(ERROR_MESSAGE.size);
  });

  test('자동차 이름 글자수가 1 미만이면 에러가 발생한다.', () => {
    // given
    const INPUT = 'A,';

    // then
    expect(() => new Cars(INPUT)).toThrow(ERROR_MESSAGE.length);
  });

  test('자동차 이름 글자수가 5 초과면 에러가 발생한다.', () => {
    // given
    const INPUT = 'A,B,CDEFGH';

    // then
    expect(() => new Cars(INPUT)).toThrow(ERROR_MESSAGE.length);
  });

  test('중복된 자동차 이름이 있으면 에러가 발생한다.', () => {
    // given
    const INPUT = 'A,B,A';

    // then
    expect(() => new Cars(INPUT)).toThrow(ERROR_MESSAGE.duplication);
  });

  test.each([
    [
      'A,B,C',
      new Map([
        ['A', 0],
        ['B', 0],
        ['C', 0],
      ]),
    ],
    [
      '롤스로이스,람보르기니,포르쉐,테슬라',
      new Map([
        ['롤스로이스', 0],
        ['람보르기니', 0],
        ['포르쉐', 0],
        ['테슬라', 0],
      ]),
    ],
  ])(
    '유효성 검사가 끝나고 getCars 메소드를 호출하면 자동차 이름과 초기 전진 횟수 `0`으로 이루어진 Map 객체가 반환된다.',
    (input, output) => {
      // when
      const cars = new Cars(input).getCars();

      // then
      expect(cars).toEqual(output);
    },
  );
});
