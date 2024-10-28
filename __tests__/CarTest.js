import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  test('이름이 유효하게 설정되는지 확인', () => {
    const car = new Car('woowa');
    expect(car.getName()).toBe('woowa');
  });

  test('빈 이름일 경우 "null"로 설정되는지 확인', () => {
    const car = new Car('');
    expect(car.getName()).toBe('null');
  });

  test('초기 거리가 0인지 확인', () => {
    const car = new Car('test');
    expect(car.getDistance()).toBe(0);
  });

  test('moveForward 메서드 호출 시 거리가 증가하는지 확인', () => {
    const car = new Car('test');
    car.moveForward();
    expect(car.getDistance()).toBe(1);
  });
});
