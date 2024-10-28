import { Random } from '@woowacourse/mission-utils';
import Car from '../src/Car.js';

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    Random.pickNumberInRange,
  );
};

describe('Car의 메서드 테스트', () => {
  test('driving 메서드 테스트', () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const CAR_NAME = 'woowa';
    const results = [
      { name: CAR_NAME, distance: 1 },
      { name: CAR_NAME, distance: 2 },
      { name: CAR_NAME, distance: 2 },
    ];

    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP]);

    const car = new Car(CAR_NAME);

    results.forEach((result) => {
      expect(car.driving()).toEqual(expect.objectContaining(result));
    });
  });
});
