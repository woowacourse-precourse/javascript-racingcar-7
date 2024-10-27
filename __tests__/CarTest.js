import Car from '../src/Car.js';
import { mockRandoms } from '../src/utils/testUtil.js';

describe('자동차 전진', () => {
  test.each([
    [[1], 0],
    [[4], 1],
    [[9], 1],
  ])('기능 테스트', async (randomNumbers, distance) => {
    // given
    const name = 'haesa';

    mockRandoms(randomNumbers);

    // when
    const car = new Car(name);
    car.raceLap();

    // then
    expect(car.getDistance()).toBe(distance);
  });
});
