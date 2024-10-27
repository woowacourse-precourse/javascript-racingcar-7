import Car from "../../src/models/Car";
import { ERROR_MESSAGES } from "../../src/utils/constants";

describe("Car 클래스", () => {
  describe("생성자", () => {
    test("유효한 이름으로 자동차 생성", () => {
      const car = new Car("pobi");
      expect(car.name).toBe("pobi");
      expect(car.position).toBe(0);
    });

    test("이름이 5자 초과면 에러 발생", () => {
      expect(() => new Car("longname")).toThrow(ERROR_MESSAGES.INVALID_NAME_LENGTH);
    });
  });

  describe("move()", () => {
    test("4 이상일 때 전진", () => {
      const car = new Car("pobi");
      car.move(4);
      expect(car.position).toBe(1);
    });
  });

  describe("getCurrentPosition()", () => {
    test("위치를 - 문자로 표현", () => {
      const car = new Car("pobi");
      car.position = 3;
      expect(car.getCurrentPosition()).toBe("---");
    });
  });
});
