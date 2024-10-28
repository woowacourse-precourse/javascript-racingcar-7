import Car from "../src/models/Car";
import { Random } from "@woowacourse/mission-utils";

describe("Car 클래스 테스트", () => {
  test("move: Random 값이 4 이상일 때만 position이 증가한다.", () => {
    const car = new Car("testCar");

    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);
    car.move();
    expect(car.getPosition()).toBe(1);

    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(3);
    car.move();
    expect(car.getPosition()).toBe(1);

    jest.spyOn(Random, "pickNumberInRange").mockRestore();
  });

  test("getName: 인스턴스의 이름을 반환한다.", () => {
    const car = new Car("myCar");
    expect(car.getName()).toBe("myCar");
  });

  test("getPosition: 인스턴스의 현재 위치를 반환한다.", () => {
    const car = new Car("testCar");

    expect(car.getPosition()).toBe(0);

    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(5);
    car.move();
    expect(car.getPosition()).toBe(1);

    jest.spyOn(Random, "pickNumberInRange").mockRestore();
  });

  test("getState: 인스턴스의 이름과 위치 상태('-'로 표시)를 반환한다.", () => {
    const car = new Car("myCar");

    expect(car.getState()).toBe("myCar : ");

    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);
    car.move();
    car.move();
    expect(car.getState()).toBe("myCar : --");

    jest.spyOn(Random, "pickNumberInRange").mockRestore();
  });
});
