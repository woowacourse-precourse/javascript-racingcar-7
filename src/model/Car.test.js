import random from '../util/random.js';
import Car from './Car.js';

const getRandomNumber = () => {
  return jest.spyOn(random, 'generateNumber');
};

describe('랜덤숫자 4이상일 때에만 전진하는 로직 점검', () => {
  /**@type {Car} */
  let randomNumberSpy;
  let car;

  beforeEach(() => {
    randomNumberSpy = getRandomNumber();
    car = new Car('testCar');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    [4, 1],
    [3, 0],
    [10, 0],
  ])('랜덤숫자 %s이므로 포지션은 %s이다', (randomNumber, expectedPosition) => {
    randomNumberSpy.mockReturnValue(randomNumber);
    car.move(randomNumber);
    expect(car.position).toBe(expectedPosition);
  });
});
