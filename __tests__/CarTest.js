import Car from '../src/models/Car.js';

describe('자동차 객체', () => {
  test('자동차는 처음에 위치 0에 있다.', () => {
    const car = new Car();
    expect(car.getPosition()).toBe(0);
  });

  test('자동차는 처음에 이름을 가진다.', () => {
    const NAME = 'pobi';
    const car = new Car(NAME);
    expect(car.getName()).toBe(NAME);
  });

  test('자동차는 위치를 1 증가할 수 있다.', () => {
    const car = new Car();
    const position = car.getPosition();

    car.move();

    expect(car.getPosition()).toBe(position + 1);
  });
});
