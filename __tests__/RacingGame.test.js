import { MissionUtils } from '@woowacourse/mission-utils';
import RacingGame from '../src/model/RacingGame.js';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('레이싱 게임 기능 테스트', () => {
  const TEST_CASES = [
    [
      ['pobi', 'lisa', 'jun'],
      4,
      [1, 2, 7, 3, 4, 4, 0, 4, 9, 6, 8, 5],
      [
        ['pobi : ', 'lisa : ', 'jun : -'],
        ['pobi : ', 'lisa : -', 'jun : --'],
        ['pobi : ', 'lisa : --', 'jun : ---'],
        ['pobi : -', 'lisa : ---', 'jun : ----'],
      ],
    ],
    [
      ['dong', 'gyun', 'dany'],
      4,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [
        ['dong : ', 'gyun : ', 'dany : '],
        ['dong : ', 'gyun : ', 'dany : '],
        ['dong : ', 'gyun : ', 'dany : '],
        ['dong : ', 'gyun : ', 'dany : '],
      ],
    ],
  ];

  test.each(TEST_CASES)(
    '매 시행마다 각 자동차들의 상태 출력 테스트',
    async (carNames, tryNumber, randomNumbers, answer) => {
      mockRandoms(randomNumbers);

      const racingGame = new RacingGame(carNames, tryNumber);
      const raceResult = racingGame.race();

      expect(raceResult).toEqual(answer);
    },
  );
});

describe('우승자 출력 테스트', () => {
  const TEST_CASES = [
    [['pobi'], 3, [0, 0, 0], ['pobi']],
    [['pobi', 'lisa'], 2, [0, 0, 0, 0, 0, 0], ['pobi', 'lisa']],
    [['pobi', 'lisa', 'dany'], 3, [0, 0, 0, 4, 0, 0, 0, 0, 9], ['pobi', 'dany']],
  ];

  test.each(TEST_CASES)(
    '여러명일 경우 쉼표(,)를 사용하여 출력한다',
    (carNames, tryNumber, randomNumbers, answer) => {
      mockRandoms(randomNumbers);

      const racingGame = new RacingGame(carNames, tryNumber);
      racingGame.race();
      const winners = racingGame.getWinners();

      expect(winners).toEqual(answer);
    },
  );
});
