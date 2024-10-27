import { setCarNames } from "../src/features/setCarNames.js";
import { MESSAGES } from "../src/config/config.js";
import { Car } from "../src/models/Car.js";

describe("setCarNames 테스트", () => {
  test("정상적으로 값을 할당하고, Car 리스트를 반환하는 지 확인", () => {
    const INPUT = ["pobi", "woni", "jun"];
    const carList = setCarNames(INPUT);

    carList.forEach((car, index) => {
      expect(car).toBeInstanceOf(Car);
      expect(car.name).toBe(INPUT[index]);
      expect(car.forwardCount).toBe(0);
    });
  });

  test("문자열 리스트가 공백일 때 에러를 발생시키는 지 확인", () => {
    const INPUT = [];
    expect(() => setCarNames(INPUT)).toThrow(MESSAGES.ERROR_INPUT_EMPTY);
  });
});
