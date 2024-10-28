import Car from '../src/models/Car';

describe('Car 클래스 테스트', () => {
  test('getName 메서드가 올바른 이름을 반환해야 함', () => {
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
  });

  test('getDistance 메서드가 초기 거리 0을 반환해야 함', () => {
    const car = new Car('pobi');
    expect(car.getDistance()).toBe(0);
  });
});
