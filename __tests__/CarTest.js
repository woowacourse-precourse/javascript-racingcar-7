import Car from '../src/Car.js';

describe('Car', () => {
  test('자동차 이름이 5 글자를 초과하면 에러가 발생한다', () => {
    expect(() => {
      new Car('hellooo');
    }).toThrow('[ERROR]');
  });

  test('4 이상의 숫자가 나오면 전진한다', () => {
    const car = new Car('pobi');
    car.move(4);
    expect(car.position).toBe(1);
  });

  test('3 이하의 숫자가 나오면 전진하지 않는다', () => {
    const car = new Car('pobi');
    car.move(3);
    expect(car.position).toBe(0);
  });
});
