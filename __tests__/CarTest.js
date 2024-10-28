import Car from "../src/Car.js";

describe("Car 클래스 단위 테스트", () => {
  // Car 클래스 초기화 테스트
  test("Car 인스턴스는 이름과 초기 위치 0을 가진다", () => {
    const car = new Car("TestCar");

    expect(car.getName()).toBe("TestCar");
    expect(car.getPosition()).toBe(0);
  });

  // move 메서드 테스트
  test("move 메서드를 호출하면 position이 1 증가한다", () => {
    const car = new Car("TestCar");

    car.move(); // 위치가 1 증가해야 함
    expect(car.getPosition()).toBe(1);

    car.move(); // 위치가 또다시 1 증가해야 함
    expect(car.getPosition()).toBe(2);
  });

  // getPosition 메서드 테스트
  test("getPosition 메서드는 현재 position 값을 반환한다", () => {
    const car = new Car("TestCar");

    expect(car.getPosition()).toBe(0); // 초기 위치는 0

    car.move();
    expect(car.getPosition()).toBe(1); // move 호출 후 위치는 1
  });

  // getName 메서드 테스트
  test("getName 메서드는 현재 name 값을 반환한다", () => {
    const car = new Car("TestCar");
    expect(car.getName()).toBe("TestCar");
  });
});
