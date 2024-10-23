import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  test('getName 메서드가 자동차의 이름을 반환하는지 확인', () => {
    const car = new Car('pobi');
    const carName = car.getName();

    expect(carName).toBe('pobi');
  });

  test('getDistance 메서드가 자동차의 거리를 반환하는지 확인', () => {
    const car = new Car('pobi');
    const carDistance = car.getDistance();

    expect(carDistance).toBe(0);
  });
});
