import Car from "../src/Car.js";

describe("자동차 테스트", () => {
  let car;

  it("자동차는 이름을 입력받아 생성되고 입력받은 이름을 속성으로 가진다.", () => {
    const mockName = "자동차이름";

    car = new Car(mockName);
    expect(car.name).toBe(mockName);
  });

  it("자동차가 처음 생성됐을 때 거리는 0이다.", () => {
    const mockName = "자동차이름";
    const initialDistance = 0;

    car = new Car(mockName);
    expect(car.distance).toBe(initialDistance);
  });

  it("자동차가 움직이면 거리가 1씩 늘어난다.", () => {
    const mockName = "자동차이름";
    const initialDistance = 0;

    car = new Car(mockName);

    car.move();
    expect(car.distance).toBe(initialDistance + 1);
  });
});
