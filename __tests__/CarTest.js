import Car from "../src/domain/Car.js";
import { STATIC_NUMBER } from "../src/static/Static.js";

describe("Car 클래스 테스트", () => {
  let car;

  beforeEach(() => {
    car = new Car("pobi");
  });

  test("이름이 5자 이하인 자동차 생성", () => {
    const car = new Car("pobi");
    expect(car.getName()).toBe("pobi");
  });

  test("전진 조건(4 이상)일 때 움직임", () => {
    car.move(4); // 경계값 테스트
    expect(car.getPosition()).toBe(1);

    car.move(9); // 최대값 테스트
    expect(car.getPosition()).toBe(2);
  });

  test("정지 조건(4 미만)일 때 멈춤", () => {
    car.move(0); // 최소값 테스트
    expect(car.getPosition()).toBe(0);

    car.move(3); // 경계값 테스트
    expect(car.getPosition()).toBe(0);
  });

  test("연속 이동 테스트", () => {
    car.move(4);
    car.move(4);
    car.move(4);
    expect(car.getPosition()).toBe(3);
  });
});
