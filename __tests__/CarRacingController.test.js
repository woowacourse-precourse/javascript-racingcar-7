// __tests__/CarRacingController.test.js
import CarRacingController from "../src/controller/CarRacingController.js";
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
  Random: { pickNumberInRange: jest.fn() },
}));

describe("CarRacingController 통합 테스트", () => {
  let controller;

  beforeEach(() => {
    controller = new CarRacingController();
    jest.clearAllMocks();
  });

  test("여러 명이 동시에 우승하는 경우", async () => {
    Console.readLineAsync.mockResolvedValueOnce("pobi,jun,woni");
    Console.readLineAsync.mockResolvedValueOnce("1");

    Random.pickNumberInRange.mockReturnValueOnce(5);
    Random.pickNumberInRange.mockReturnValueOnce(5);
    Random.pickNumberInRange.mockReturnValueOnce(3);

    await controller.play();

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi, jun");
  });

  test("단독 우승자가 나오는 경우", async () => {
    Console.readLineAsync.mockResolvedValueOnce("pobi,jun,woni");
    Console.readLineAsync.mockResolvedValueOnce("1");

    Random.pickNumberInRange.mockReturnValueOnce(5);
    Random.pickNumberInRange.mockReturnValueOnce(3);
    Random.pickNumberInRange.mockReturnValueOnce(3);

    await controller.play();

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : pobi");
  });
});
