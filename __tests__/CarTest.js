import Car from '../src/Model/Car.js';

describe('Car 클래스 테스트', () => {
  test('자동차 이름이 5자 이하인 경우 정상적으로 객체 생성', () => {
    const car = new Car('BMW');
    expect(car.getName()).toBe('BMW');
  });

  test('자동차 이름이 5자를 초과하면 에러 발생', () => {
    expect(() => new Car('Mercedes')).toThrow('[ERROR]');
  });
});
