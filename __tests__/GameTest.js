import { VALUES } from '../src/constants/values.js';
import Game from '../src/Game.js';
import { mockRandoms } from '../src/utils/testUtils.js';

describe('Game 클래스 테스트', () => {
  const testCases = [
    {
      description: '한 대의 자동차만 이동한 경우',
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore - 1],
      expectedResult: [
        {
          name: 'a',
          progress: 1,
        },
        {
          name: 'b',
          progress: 0,
        },
      ],
      expectedWinner: ['a'],
    },
    {
      description: '모든 자동차가 이동한 경우',
      carNames: ['a', 'b'],
      randomValues: [VALUES.moveIfOrMore, VALUES.moveIfOrMore],
      expectedResult: [
        {
          name: 'a',
          progress: 1,
        },
        {
          name: 'b',
          progress: 1,
        },
      ],
      expectedWinner: ['a', 'b'],
    },
  ];

  describe.each(testCases)(
    '$description',
    ({ carNames, randomValues, expectedResult, expectedWinner }) => {
      beforeEach(() => {
        mockRandoms(randomValues);
      });

      test('자동차의 이동 결과를 가져오는 테스트', () => {
        // when
        const game = new Game(carNames);
        const result = game.moveAndGetResultOfAllCars();

        // then
        expect(result).toEqual(expectedResult);
      });

      test('우승한 자동차를 가져오는 테스트', () => {
        // when
        const game = new Game(carNames);
        const trialCount = randomValues.length / carNames.length;
        for (let i = 0; i < trialCount; i += 1) {
          game.moveAndGetResultOfAllCars();
        }
        const winner = game.getWinner();

        // then
        expect(winner).toEqual(expectedWinner);
      });
    },
  );
});
