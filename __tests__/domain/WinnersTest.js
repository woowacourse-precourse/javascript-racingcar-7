import Winners from '../../src/domain/Winners';

describe('우승자 결정 기능 테스트', () => {
  test('모두 전진하지 않았으면 우승자가 없다는 내용이 반환된다.', () => {
    // given
    const CARS = new Map([
      ['벤츠', 0],
      ['혼다', 0],
      ['피아트', 0],
    ]);
    const OUTPUT = '모든 자동차가 전진하지 않았으며 우승자가 없습니다.';

    // when
    const winners = new Winners(CARS).getWinners();

    // then
    expect(winners).toBe(OUTPUT);
  });

  test.each([
    [
      [
        ['벤츠', 1],
        ['혼다', 2],
        ['피아트', 3],
      ],
      '피아트',
    ],
    [
      [
        ['벤츠', 3],
        ['혼다', 2],
        ['피아트', 1],
      ],
      '벤츠',
    ],
    [
      [
        ['벤츠', 1],
        ['혼다', 3],
        ['피아트', 2],
      ],
      '혼다',
    ],
  ])(
    '우승자가 한 대면 구분자 없이 자동차 이름 하나만 반환된다.',
    (cars, output) => {
      // given
      const CARS = new Map(cars);

      // when
      const winners = new Winners(CARS).getWinners();

      // then
      expect(winners).toBe(output);
    },
  );

  test.each([
    [
      [
        ['벤츠', 3],
        ['혼다', 2],
        ['피아트', 3],
      ],
      '벤츠, 피아트',
    ],
    [
      [
        ['소나타', 3],
        ['캠리', 3],
        ['람보르기니', 1],
      ],
      '소나타, 캠리',
    ],
    [
      [
        ['A', 1],
        ['B', 1],
        ['C', 1],
        ['D', 1],
      ],
      'A, B, C, D',
    ],
  ])(
    '우승자가 한 대 이상이면 쉼표 구분자로 자동차 이름 여러 대가 반환된다.',
    (cars, output) => {
      // given
      const CARS = new Map(cars);

      // when
      const winners = new Winners(CARS).getWinners();

      // then
      expect(winners).toBe(output);
    },
  );
});
