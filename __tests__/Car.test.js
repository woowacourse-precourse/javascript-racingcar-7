import Car from "../src/domain/Car.js";

describe("Car 클래스 테스트", () => {
  let car;

  beforeEach(() => {
    car = new Car("pobi");
  });

  test("자동차 이름이 정상적으로 설정되는지 확인", () => {
    expect(car.getName()).toBe("pobi");
  });

  test("전진 조건 만족 시 위치가 증가하는지 확인", () => {
    car.move();
    expect(car.getPosition()).toBe(1);
  });

  test("연속 전진 시 위치가 누적 증가하는지 확인", () => {
    car.move();
    car.move();
    expect(car.getPosition()).toBe(2);
  });
});
