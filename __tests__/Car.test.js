import Car from '../src/models/Car';

describe('Car 클래스', () => {
  let car;

  beforeEach(() => {
    car = new Car('pobi');
  });

  test('올바른 이름과 위치로 초기화해야 합니다', () => {
    expect(car.name).toBe('pobi');
    expect(car.getDistance()).toBe(0);
  });

  describe('updateDistance 메서드', () => {
    test('randomNumber가 4보다 클 때 위치를 증가시켜야 합니다', () => {
      car.updateDistance(5);
      expect(car.getDistance()).toBe(1);
    });

    test('randomNumber가 4일 때 위치를 증가시켜야 합니다', () => {
      car.updateDistance(4);
      expect(car.getDistance()).toBe(1);
    });

    test('randomNumber가 4보다 작을 때 위치를 증가시키지 않아야 합니다', () => {
      car.updateDistance(3);
      expect(car.getDistance()).toBe(0);
    });

    test('여러 번의 이동을 올바르게 처리해야 합니다', () => {
      car.updateDistance(5);
      car.updateDistance(4);
      car.updateDistance(3);
      car.updateDistance(6);
      expect(car.getDistance()).toBe(3);
    });
  });
});
