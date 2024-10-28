import Car from '../src/classes/Car';
import { Random } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe('Car', () => {
  let car;
  beforeEach(() => {
    car = new Car('pobi');
  });

  test('attemptMove: 무작위 값이 4 이상이면 자동차가 전진', () => {
    Random.pickNumberInRange.mockReturnValue(5);
    car.attemptMove();
    expect(car.distance).toBe(1);
  });

  test('attemptMove: 무작위 값이 4 미만이면 자동차가 전진하지 않음', () => {
    Random.pickNumberInRange.mockReturnValue(3);
    car.attemptMove();
    expect(car.distance).toBe(0);
  });
});
