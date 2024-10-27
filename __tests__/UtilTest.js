import { MissionUtils } from "@woowacourse/mission-utils";
import View from "../src/View/View.js";
import { Car } from "../src/Model/Car.js";
import { ParseUtils } from "../src/Util/ParseUtils.js";

describe("View Tests", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("View Winner Test", () => {
    const view = new View();

    view.outputWinner(["pobi", "rupi", "wolf"]);

    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : pobi, rupi, wolf");
  });

  test("Car Move Test", () => {
    const car = new Car("pobi");
    const mockRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");

    mockRandom
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(7);

    const result1 = car.moveForward();
    expect(result1).toBe(1);

    const result2 = car.moveForward();
    expect(result2).toBe(1);

    const result3 = car.moveForward();
    expect(result3).toBe(2);
  });
});

test("ParseUtils Test - parseDistanceToDash", () => {
  const result = ParseUtils.parseDistanceToDash(3);

  expect(result).toBe("---");
});
