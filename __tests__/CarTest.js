import Car from '../src/models/Car.js';

describe('Car 클래스 테스트', () => {
  test('자동차 초기화 시 이름과 초기 위치 확인', () => {
    const car = new Car('Harry');
    expect(car.getName()).toBe('Harry');
    expect(car.getPosition()).toBe(0);
  });

  test('자동차 전진 기능 테스트', () => {
    const car = new Car('Harry');
    car.moveForward();
    expect(car.getPosition()).toBe(1);
    car.moveForward();
    expect(car.getPosition()).toBe(2);
  });
});
