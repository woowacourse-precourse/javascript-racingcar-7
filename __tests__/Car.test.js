import Car from '../src/models/Car.js';
import * as randomUtils from '../src/utils/getRandomNumber.js';

jest.mock('../src/utils/getRandomNumber.js');

describe('Car 클래스', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  test('무작위 값이 4 이상일 때 자동차가 전진합니다.', () => {
    randomUtils.getRandomNumber.mockReturnValue(4);
    car.move();
    expect(car.getDistance()).toBe(1);
  });

  test('무작위 값이 3 이하일 때 자동차가 전진하지 않습니다.', () => {
    randomUtils.getRandomNumber.mockReturnValue(3);
    car.move();
    expect(car.getDistance()).toBe(0);
  });
});
