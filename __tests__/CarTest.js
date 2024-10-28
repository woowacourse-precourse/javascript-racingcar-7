import Car from '../src/model/Car.js';
import { CONFIG } from '../src/constant/config.js';
import { getRandomNumber } from '../src/util/Random.js';

jest.mock('../src/util/Random.js');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('자동차 클래스 테스트', () => {
  test('자동차 이름 설정 및 위치 확인', () => {
    const car = new Car('pobi');

    expect(car.getName()).toBe('pobi');
    expect(car.getPosition()).toBe(0);
  });

  test('자동차가 전진하는지 확인', () => {
    const car = new Car('pobi');
    getRandomNumber.mockReturnValue(CONFIG.CAR_MOVING_CONDITION);

    car.tryToMoveForward();
    expect(car.getPosition()).toBe(1);
  });

  test('자동차가 전진하지 않는지 확인', () => {
    const car = new Car('pobi');
    getRandomNumber.mockReturnValue(CONFIG.CAR_MOVING_CONDITION - 1);

    car.tryToMoveForward();

    console.log(`Position after trying to move forward: ${car.getPosition()}`);
    expect(car.getPosition()).toBe(0);
  });
});
