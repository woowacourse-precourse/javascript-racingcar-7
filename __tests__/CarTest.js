import Car from '../src/model/Car.js';
import { CONFIG } from '../src/constant/config.js';

describe('자동차 클래스 테스트', () => {
  test('자동차 이름 설정 및 위치 확인', () => {
    const car = new Car('pobi');

    expect(car.getName()).toBe('pobi');
    expect(car.getPosition()).toBe(0);
  });

  test('자동차가 전진하는지 확인', () => {
    const car = new Car('pobi');
    const randomValue = CONFIG.CAR_MOVING_CONDITION;
    car.tryToMoveForward(randomValue);

    expect(car.getPosition()).toBe(1);
  });

  test('자동차가 전진하지 않는지 확인', () => {
    const car = new Car('pobi');
    const randomValue = CONFIG.CAR_MOVING_CONDITION - 1;
    car.tryToMoveForward(randomValue);

    expect(car.getPosition()).toBe(0);
  });
});
