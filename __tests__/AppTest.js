import { MissionUtils } from '@woowacourse/mission-utils';

import App from '../src/App.js';
import Car from '../src/Car.js';

describe('자동차 경주', () => {
  let app;

  const CAR_LIST = [{ name: 'pobi', position: 2 },
    { name: 'woni', position: 9 },
    { name: 'jun', position: 3 }];

  beforeEach(() => {
    app = new App();
  });

  const mockRandomValue = (value) => {
    jest.spyOn(MissionUtils.Random, 'pickNumberInRange').mockReturnValue(value);
  };

  test('무작위 값이 4 이상이면 참을 반환한다.', () => {
    mockRandomValue(4);
    expect(app.isHighEnough()).toBe(true);
  });

  test('무작위 값이 4 미만이면 거짓을 반환한다.', () => {
    mockRandomValue(1);
    expect(app.isHighEnough()).toBe(false);
  });

  test('자동차가 전진하면 자동차의 위치는 1 증가한다.', () => {
    mockRandomValue(5);
    const car = new Car();
    const position = car.getPosition();

    app.moveCarForward(car);
    expect(car.getPosition()).toBe(position + 1);
  });

  test('여러 대의 자동차는 서로 독립적이다', () => {
    const NAMES = ['pobi', 'woni', 'jun'];

    const carList = app.makeCars(NAMES);

    expect(carList[0].getName()).toBe(NAMES[0]);
    expect(carList[1].getName()).toBe(NAMES[1]);
  });

  test('자동차들이 가진 위치 값 중에서 가장 큰 위치의 값을 찾는다.', () => {
    app.carList = CAR_LIST;

    expect(app.getMaxPosition()).toBe(9);
  });

  test('가장 큰 위치의 값을 가진 자동차는 1대이다.', () => {
    app.carList = CAR_LIST;
    const WINNER = ['woni'];
    const MAX_POSITION = 9;

    expect(app.findCarWithMaxPosition(MAX_POSITION)).toEqual(WINNER);
  });

  test('가장 큰 위치의 값을 가진 자동차는 1대 이상이다.', () => {
    app.carList = CAR_LIST;
    const WINNER = ['woni', 'jun'];
    const MAX_POSITION = 9;

    expect(app.findCarWithMaxPosition(MAX_POSITION)).toEqual(WINNER);
  });
});
