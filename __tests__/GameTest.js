import App from "../src/App.js";
import Car from "../src/Car.js";
import { MESSAGE, NUMBER } from "../src/constants.js";
import Validator from "../src/Validator.js";

// Console과 MissionUtils 모듈을 모킹
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
    readLineAsync: jest.fn(),
  },
  MissionUtils: {
    Random: {
      pickNumberInRange: jest.fn(), // Random 모킹 설정
    },
  },
}));

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.clearAllMocks(); // 각 테스트 실행 전 모의 함수 초기화
  });

  describe("run 메서드", () => {
    test("사용자 입력을 받아 올바르게 작동하는지 테스트", async () => {
      const nameInput = "Car1,Car2";
      const tryCount = "3";

      require("@woowacourse/mission-utils")
        .Console.readLineAsync.mockResolvedValueOnce(nameInput)
        .mockResolvedValueOnce(tryCount);

      jest.spyOn(Validator, "validateNameInput").mockImplementation(() => {});
      jest
        .spyOn(Validator, "validateTryCountInput")
        .mockImplementation(() => {});
      jest.spyOn(app, "randomMove").mockImplementation(() => {});
      jest.spyOn(app, "printResult").mockImplementation(() => {});
      jest.spyOn(app, "getWinners").mockReturnValue(["Car1"]);

      await app.run();

      expect(Validator.validateNameInput).toHaveBeenCalledWith(nameInput);
      expect(Validator.validateTryCountInput).toHaveBeenCalledWith(tryCount);
      expect(app.randomMove).toHaveBeenCalledTimes(3);
      expect(app.printResult).toHaveBeenCalledTimes(3);
      expect(
        require("@woowacourse/mission-utils").Console.print
      ).toHaveBeenCalledWith(`${MESSAGE.PRINT_WINNERS}Car1`);
    });
  });

  describe("getRandomNumber 메서드", () => {
    test("지정된 범위 내에서 랜덤한 숫자를 반환", () => {
      const randomValue = 4;
      require("@woowacourse/mission-utils").MissionUtils.Random.pickNumberInRange.mockReturnValue(
        randomValue
      );

      const result = app.getRandomNumber();
      expect(result).toBe(randomValue);
      expect(
        require("@woowacourse/mission-utils").MissionUtils.Random
          .pickNumberInRange
      ).toHaveBeenCalledWith(NUMBER.START_NUMBER, NUMBER.LAST_NUMBER);
    });
  });

  describe("randomMove 메서드", () => {
    test("조건에 따라 자동차가 이동하도록 작동", () => {
      const cars = [new Car("Car1"), new Car("Car2")];
      jest
        .spyOn(app, "getRandomNumber")
        .mockReturnValueOnce(NUMBER.LIMIT_NUMBER);

      app.randomMove(cars);

      expect(cars[0].getPosition()).toBe(1);
      expect(cars[1].getPosition()).toBe(1);
    });
  });

  describe("printResult 메서드", () => {
    test("자동차 위치를 출력", () => {
      const cars = [new Car("Car1"), new Car("Car2")];
      cars[0].move();
      cars[1].move();
      cars[1].move();

      app.printResult(cars);

      expect(
        require("@woowacourse/mission-utils").Console.print
      ).toHaveBeenCalledWith("Car1 : -");
      expect(
        require("@woowacourse/mission-utils").Console.print
      ).toHaveBeenCalledWith("Car2 : --");
    });
  });

  describe("getWinners 메서드", () => {
    test("최대 위치에 있는 자동차를 우승자로 반환", () => {
      const cars = [new Car("Car1"), new Car("Car2"), new Car("Car3")];
      cars[0].move();
      cars[1].move();
      cars[1].move();
      cars[2].move();
      cars[2].move();

      const winners = app.getWinners(cars);

      expect(winners).toEqual(["Car2", "Car3"]);
    });
  });
});
