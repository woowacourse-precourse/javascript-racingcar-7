import { MissionUtils, Random } from '@woowacourse/mission-utils';
import { playGame } from '../src/App.js';
import { GAME_SETTINGS } from '../src/constants.js';

describe('자동차 경주: 이동 기능 테스트', () => {
  const car = { name: 'minda', score: 0 };

  beforeEach(() => {
    car.score = 0;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('자동차가 전진 조건을 만족하는 값인 경우 자동차는 전진한다', () => {
    jest
      .spyOn(MissionUtils.Random, 'pickNumberInRange')
      .mockReturnValue(GAME_SETTINGS.MIN_SUCCESS_SCORE);

    playGame(car);

    expect(car.score).toBe(1);
  });

  test('자동차가 전진 조건을 만족하지 않는 경우 자동차는 멈춘다', () => {
    jest
      .spyOn(MissionUtils.Random, 'pickNumberInRange')
      .mockReturnValue(GAME_SETTINGS.MIN_SUCCESS_SCORE - 1);

    playGame(car);

    expect(car.score).toBe(0);
  });
});
