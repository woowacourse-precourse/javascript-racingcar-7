import { Car } from "../src/Car.js";
import {
  INPUT_ERROR_MESSAGE,
  OVER_NAME_LENGTH_ERROR_MESSAGE
} from "../src/constants/Messages.js";

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

  test('Car 클래스의 매개변수로 공백이 전달되면 에러를 던진다.', () => {
    const emptyName = '';
    expect(() => new Car(emptyName)).toThrow(INPUT_ERROR_MESSAGE);
  })

  test('이름이 최대 글자수 초과인 경우 에러를 던진다.', () => {
    const overLengthName = '123456';
    expect(() => new Car(overLengthName)).toThrow(OVER_NAME_LENGTH_ERROR_MESSAGE);
  })
})
