import Car from '../src/Car/car.js';

describe('자동차 전진 기능 테스트', () => {
  test('4 이상의 숫자는 전진.', () => {
    const car = new Car('pobi');
    car.move(5);
    expect(car.position).toBe(1);
  });
  test('4 미만의 숫자는 정지.', () => {
    const car = new Car('pobi');
    car.move(3);
    expect(car.position).toBe(0);
  });
});
