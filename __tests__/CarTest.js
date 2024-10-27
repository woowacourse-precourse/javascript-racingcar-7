import Car from "../src/models/Car";

describe("Car 클래스 테스트", () => {
  test("유효한 이름으로 자동차 생성", () => {
    const car = new Car("pobi");
    expect(car.name).toBe("pobi");
  });

  test("4 이상의 숫자에서 자동차 전진", () => {
    const car = new Car("pobi");
    car.moveCar(4);
    expect(car.position).toBe(1);
  });

  test("3 이하의 숫자에서 자동차 정지", () => {
    const car = new Car("pobi");
    car.moveCar(3);
    expect(car.position).toBe(0);
  });

  test("현재 상태 출력 테스트", () => {
    const car = new Car("pobi");
    car.moveCar(4);
    car.moveCar(7);
    expect(car.getCurrentStatus()).toBe("pobi : --");
  });
});
