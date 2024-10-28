import RaceManager from "../src/domain/RaceManager.js";
import { Random } from "@woowacourse/mission-utils";
import Car from "../src/domain/Car.js";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: { pickNumberInRange: jest.fn() }, // Random을 jest 모의함수로 정의
}));

describe("RaceManager 클래스 테스트", () => {
  let raceManager;

  beforeEach(() => {
    raceManager = new RaceManager();
    raceManager.createCars(["pobi", "crong", "honux"]);
  });

  test("모든 자동차가 조건을 만족하여 전진하는 경우", () => {
    Random.pickNumberInRange.mockReturnValue(5); // 전진 조건 만족
    raceManager.moveAllCars();

    raceManager.getCars().forEach((car) => {
      expect(car.getPosition()).toBe(1);
    });
  });

  test("최종 우승자 선정 로직 확인", () => {
    Random.pickNumberInRange.mockReturnValueOnce(5);
    Random.pickNumberInRange.mockReturnValueOnce(3);
    Random.pickNumberInRange.mockReturnValueOnce(5);

    raceManager.moveAllCars();

    const winners = raceManager.findWinners();
    expect(winners).toEqual(["pobi", "honux"]);
  });
});
