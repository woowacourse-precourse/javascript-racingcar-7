import RacingCarService from '../src/service/RacingCarService.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandom = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe('RacingCarService 테스트', () => {
  let racingCarService;

  beforeEach(() => {
    racingCarService = new RacingCarService();
    const input = 'pobi,woni,yeon';
    racingCarService.saveCars(input);
  });

  test('자동차 저장하기', () => {
    expect(racingCarService.cars).toHaveLength(3);
    expect(racingCarService.cars[0].getName()).toBe('pobi');
    expect(racingCarService.cars[1].getName()).toBe('woni');
    expect(racingCarService.cars[2].getName()).toBe('yeon');
  });

  test.each([
    {
      randoms: [4, 1, 9],
      result: [
        { name: 'pobi', advancedCount: 1 },
        { name: 'woni', advancedCount: 0 },
        { name: 'yeon', advancedCount: 1 },
      ],
    },
    {
      randoms: [6, 1, 0],
      result: [
        { name: 'pobi', advancedCount: 1 },
        { name: 'woni', advancedCount: 0 },
        { name: 'yeon', advancedCount: 0 },
      ],
    },
  ])('저장된 모든 자동차 움직임 처리하기', ({ randoms, result }) => {
    mockRandom(randoms);
    expect(racingCarService.processCarMovement()).toEqual(result);
  });

  test.each([
    {
      randoms: [4, 1, 9],
      result: ['pobi', 'yeon'],
    },
    {
      randoms: [6, 1, 0],
      result: ['pobi'],
    },
  ])('우승자 가져오기', ({ randoms, result }) => {
    mockRandom(randoms);
    racingCarService.processCarMovement();
    expect(racingCarService.getWinners()).toEqual(result);
  });
});
