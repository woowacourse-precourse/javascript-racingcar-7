import { Random } from "@woowacourse/mission-utils";
import {
  createCar,
  moveForward,
  getCurrentPosition,
  findWinners,
  formatWinners,
} from "../src/racingGame.js";

describe("자동차 경주 게임 테스트", () => {
  // createCar 테스트
  describe("createCar", () => {
    test("자동차 객체를 올바르게 생성해야 한다", () => {
      const car = createCar("pobi");

      expect(car).toEqual({
        name: "pobi",
        position: 0,
      });
    });
  });

  // moveForward 테스트
  describe("moveForward", () => {
    // 테스트를 위해 Random.pickNumberInRange
    beforeEach(() => {
      jest.clearAllMocks();
    });

    test("숫자가 4 이상일 때 자동차가 전진해야 한다", () => {
      const car = createCar("pobi");
      jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);

      const movedCar = moveForward(car);

      expect(movedCar.position).toBe(1);
      expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
    });

    test("숫자가 3 이하일 때 자동차가 전진하지 않아야 한다", () => {
      const car = createCar("pobi");
      jest.spyOn(Random, "pickNumberInRange").mockReturnValue(3);

      const movedCar = moveForward(car);

      expect(movedCar.position).toBe(0);
      expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
    });

    test("이동 후에도 자동차 이름은 유지되어야 한다", () => {
      const car = createCar("pobi");
      jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);

      const movedCar = moveForward(car);

      expect(movedCar.name).toBe("pobi");
    });
  });

  // getCurrentPosition 테스트
  describe("getCurrentPosition", () => {
    test("현재 위치를 올바른 형식의 문자열로 반환해야 한다", () => {
      const car = { name: "pobi", position: 3 };
      const position = getCurrentPosition(car);

      expect(position).toBe("pobi : ---");
    });

    test("위치가 0일 때 대시를 출력하지 않아야 한다", () => {
      const car = { name: "pobi", position: 0 };
      const position = getCurrentPosition(car);

      expect(position).toBe("pobi : ");
    });

    test("이름과 위치가 다른 자동차의 위치를 올바르게 표시해야 한다", () => {
      const car = { name: "max", position: 5 };
      const position = getCurrentPosition(car);

      expect(position).toBe("max : -----");
    });
  });

  describe("findWinners", () => {
    test("단독 우승자를 찾을 수 있어야 한다", () => {
      const cars = [
        { name: "pobi", position: 3 },
        { name: "jun", position: 2 },
        { name: "max", position: 1 },
      ];

      const winners = findWinners(cars);

      expect(winners).toEqual(["pobi"]);
    });

    test("공동 우승자를 찾을 수 있어야 한다", () => {
      const cars = [
        { name: "pobi", position: 3 },
        { name: "jun", position: 3 },
        { name: "max", position: 1 },
      ];

      const winners = findWinners(cars);

      expect(winners).toEqual(["pobi", "jun"]);
    });

    test("모든 자동차가 같은 위치면 모두 우승자여야 한다", () => {
      const cars = [
        { name: "pobi", position: 0 },
        { name: "jun", position: 0 },
        { name: "max", position: 0 },
      ];

      const winners = findWinners(cars);

      expect(winners).toEqual(["pobi", "jun", "max"]);
    });
  });

  describe("formatWinners", () => {
    test("단독 우승자를 올바른 형식으로 출력해야 한다", () => {
      const winners = ["pobi"];
      const formatted = formatWinners(winners);

      expect(formatted).toBe("최종 우승자 : pobi");
    });

    test("공동 우승자를 올바른 형식으로 출력해야 한다", () => {
      const winners = ["pobi", "jun"];
      const formatted = formatWinners(winners);

      expect(formatted).toBe("최종 우승자 : pobi, jun");
    });
  });
});
