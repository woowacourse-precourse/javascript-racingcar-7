import {Console, Random} from "@woowacourse/mission-utils";

import App, {ERROR_MESSAGES, GAME_CONSTANTS} from "./App.js";

// Console과 Random 메서드 Mock 설정
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("자동차 경주 게임", () => {
  let app;

  beforeEach(() => {
    app = new App();

    jest.clearAllMocks(); // mockClear 대신 clearAllMocks 사용
  });

  describe("입력 검증", () => {
    test("자동차 이름 입력 및 검증 - 빈 입력", async () => {
      Console.readLineAsync.mockResolvedValueOnce("");

      await expect(app.processCarNames()).rejects.toThrow(
        ERROR_MESSAGES.EMPTY_INPUT
      );
    });

    test("자동차 이름 입력 및 검증 - 중복된 이름", async () => {
      Console.readLineAsync.mockResolvedValueOnce("Venti,Venti");

      await expect(app.processCarNames()).rejects.toThrow(
        ERROR_MESSAGES.DUPLICATE_NAMES
      );
    });

    test("자동차 이름 입력 및 검증 - 유효한 입력", async () => {
      Console.readLineAsync

        .mockResolvedValueOnce("Venti,Lambi,Ferri") // 자동차 이름 입력

        .mockResolvedValueOnce("3"); // 시도 횟수 입력

      await expect(app.run()).resolves.not.toThrow();

      expect(Console.readLineAsync).toHaveBeenCalledWith(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );

      expect(Console.readLineAsync).toHaveBeenCalledWith(
        "시도할 횟수는 몇 회인가요?"
      );

      expect(Console.print).toHaveBeenCalledWith(
        "입력한 자동차 이름: Venti, Lambi, Ferri"
      );

      expect(Console.print).toHaveBeenCalledWith("시도할 횟수: 3");
    });

    test("자동차 이름 입력 및 검증 - 무효한 입력 (길이 초과)", async () => {
      Console.readLineAsync.mockResolvedValueOnce("Venti,Lambi,Ferrie"); // 무효한 입력만 설정

      await expect(app.run()).rejects.toThrow(
        ERROR_MESSAGES.INVALID_NAME_LENGTH
      );
    });

    test("시도 횟수 입력 및 검증 - 유효한 입력", async () => {
      Console.readLineAsync

        .mockResolvedValueOnce("Venti,Lambi,Ferri") // 유효한 자동차 이름

        .mockResolvedValueOnce("5"); // 유효한 시도 횟수

      await expect(app.run()).resolves.not.toThrow();
    });

    test("시도 횟수 입력 및 검증 - 무효한 입력 (음수)", async () => {
      Console.readLineAsync

        .mockResolvedValueOnce("Venti,Lambi,Ferri") // 자동차 이름 입력

        .mockResolvedValueOnce("-3"); // 무효한 시도 횟수 입력

      await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.INVALID_ATTEMPTS);

      expect(Console.readLineAsync).toHaveBeenCalledWith(
        "시도할 횟수는 몇 회인가요?"
      );
    });
  });

  describe("게임 진행", () => {
    test("자동차 전진 로직", () => {
      const cars = [
        {name: "Venti", position: 0},
        {name: "Lambi", position: 0},
      ];

      Random.pickNumberInRange.mockReturnValueOnce(5); // Venti 전진
      Random.pickNumberInRange.mockReturnValueOnce(3); // Lambi 정지

      app.moveCars(cars);

      expect(cars[0].position).toBe(1);
      expect(cars[1].position).toBe(0);
    });
  });

  describe("우승자 결정", () => {
    test("우승자 결정 - 단독 우승", () => {
      const cars = [
        {name: "Venti", position: 2},

        {name: "Lambi", position: 0},

        {name: "Ferri", position: 0},
      ];

      const winners = app.determineWinners(cars);

      expect(winners).toEqual(["Venti"]);
    });

    test("우승자 결정 - 공동 우승", () => {
      const cars = [
        {name: "Venti", position: 2},

        {name: "Lambi", position: 2},

        {name: "Ferri", position: 0},
      ];

      const winners = app.determineWinners(cars);

      expect(winners).toEqual(["Venti", "Lambi"]);
    });
  });
});
