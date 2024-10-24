import { MissionUtils } from '@woowacourse/mission-utils';

import App from '../src/App.js';
import Car from '../src/Car.js';

describe('자동차 경주', () => {
  let app;

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
});
