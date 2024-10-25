import { Car } from "../src/Car.js";

describe('Car Test', () => {
  const name = 'Jelly';
  const distance = 3;

  test('move() 메서드는 Car의 length를 업데이트 한다.', () => {
    const car = new Car(name);
    car.move(distance);
    expect(car.getLength()).toBe(distance);
  })

  test('getName() 메서드는 Car의 name을 반한한다.', () => {
    const car = new Car(name);
    expect(car.getName()).toBe(name);
  })
})
