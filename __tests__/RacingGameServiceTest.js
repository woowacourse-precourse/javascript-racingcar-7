import { MissionUtils } from '@woowacourse/mission-utils';

import Car from '../src/models/Car.js';

import {
  isHighEnough, moveCarForward, makeCars, getMaxPosition, findCarWithMaxPosition,
} from '../src/services/RacingGameService.js';

describe('자동차 경주', () => {
  const CAR_LIST = [{ name: 'pobi', position: 2 },
    { name: 'woni', position: 9 },
    { name: 'jun', position: 3 }];

  const mockRandomValue = (value) => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(value);
  };

  test('무작위 값이 4 이상이면 참을 반환한다.', () => {
    mockRandomValue(4);
    expect(isHighEnough()).toBe(true);
  });

  test('무작위 값이 4 미만이면 거짓을 반환한다.', () => {
    mockRandomValue(1);
    expect(isHighEnough()).toBe(false);
  });

  test('자동차가 전진하면 자동차의 위치는 1 증가한다.', () => {
    mockRandomValue(5);
    const car = new Car();
    const position = car.getPosition();

    moveCarForward(car);
    expect(car.getPosition()).toBe(position + 1);
  });

  test('여러 대의 자동차는 서로 독립적이다', () => {
    const NAMES = ['pobi', 'woni', 'jun'];

    const carList = makeCars(NAMES);

    expect(carList[0].getName()).toBe(NAMES[0]);
    expect(carList[1].getName()).toBe(NAMES[1]);
  });

  test('자동차들이 가진 위치 값 중에서 가장 큰 위치의 값을 찾는다.', () => {
    expect(getMaxPosition(CAR_LIST)).toBe(9);
  });

  test('가장 큰 위치의 값을 가진 자동차는 1대이다.', () => {
    const WINNER = ['woni'];
    const MAX_POSITION = 9;

    expect(findCarWithMaxPosition(CAR_LIST, MAX_POSITION)).toEqual(WINNER);
  });

  test('가장 큰 위치의 값을 가진 자동차는 1대 이상이다.', () => {
    const CUSTOM_CAR_LIST = [{ name: 'pobi', position: 2 },
      { name: 'woni', position: 9 },
      { name: 'jun', position: 9 }];
    const WINNER = ['woni', 'jun'];
    const MAX_POSITION = 9;

    expect(findCarWithMaxPosition(CUSTOM_CAR_LIST, MAX_POSITION)).toEqual(WINNER);
  });
});
