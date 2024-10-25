import Car from "../src/Car";

describe("자동차 기능 테스트", () => {
  test.each([
    [4, 1],
    [3, 0],
    [9, 1],
  ])("4이상 값을 전달받으면 이동하고 아니면 정지한다.", (number, expected) => {
    const car = new Car("test");

    expect(car.move(number)).toBe(expected);
  });

  test.each([
    ["tesla", "tesla"],
    ["google", "google"],
  ])("자동차의 이름을 알 수 있다.", (name, expected) => {
    const car = new Car(name);

    expect(car.getName()).toBe(expected);
  });
});
