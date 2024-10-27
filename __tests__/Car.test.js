import Car from '../src/Car.js';

describe('Car 클래스 테스트', () => {
  test('forward 메서드를 호출하면 forwardCount가 증가', () => {
    const car = new Car('TestCar');

    expect(car.forwardCount).toBe(0);

    car.forward();

    expect(car.forwardCount).toBe(1);

    car.forward();

    expect(car.forwardCount).toBe(2);
  });
});
