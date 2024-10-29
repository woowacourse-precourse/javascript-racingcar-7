import RacingGame from "../src/RacingGame";
import { inputHandler, outputHandler } from "../src/views";
import { Random } from "@woowacourse/mission-utils";

jest.mock("../src/views");
jest.mock("@woowacourse/mission-utils");

describe("RacingGame", () => {
  let game;

  beforeEach(() => {
    jest.clearAllMocks();
    game = new RacingGame();
  });

  describe("게임 초기화", () => {
    test.each([
      ["soeun,somin", "3", true, "정상적인 입력"],
      ["soeun,soeunsoeun", "3", false, "이름이 긴 경우"],
      ["soeun,soeun", "3", false, "중복된 이름"],
      ["soeun,,somin", "3", false, "빈 이름"],
    ])("(%s, %s) -> %s (%s)", async (names, count, isValid, testCase) => {
      // given
      await inputHandler.carNameInput.mockResolvedValue(names);
      inputHandler.racingTryCountInput.mockResolvedValue(count);

      // when & then
      if (isValid) {
        await expect(game.startGame()).resolves.not.toThrow();
      } else {
        await expect(game.startGame()).rejects.toThrow("[ERROR]");
      }
    });

    test("비동기로 입력받은 값이 정상적으로 처리", async () => {
      // given
      const carNamePromise = Promise.resolve("soeun,somin");
      const tryCountPromise = Promise.resolve("3");
      inputHandler.carNameInput.mockReturnValue(carNamePromise);
      inputHandler.racingTryCountInput.mockReturnValue(tryCountPromise);

      // when
      await game.startGame();

      // then
      expect(inputHandler.carNameInput).toHaveBeenCalled();
      expect(inputHandler.racingTryCountInput).toHaveBeenCalled();
    });
  });

  describe("게임 진행", () => {
    beforeEach(async () => {
      inputHandler.carNameInput.mockResolvedValue("soeun,somin");
      inputHandler.racingTryCountInput.mockResolvedValue("3");
    });

    test("게임 결과 출력 형식이 올바를 경우", async () => {
      // given
      Random.pickNumberInRange.mockReturnValue(4);

      // when
      await game.startGame();

      // then
      expect(outputHandler.printMessage).toHaveBeenCalledWith(
        expect.any(String)
      );
      expect(outputHandler.printRoundResult).toHaveBeenCalled();
      expect(outputHandler.printMessage).toHaveBeenLastCalledWith(
        expect.stringMatching(/최종 우승자 : .*/)
      );
    });
  });

  describe("우승자 결정", () => {
    test.each([
      [[4, 3], ["soeun"], "단독 우승경우"],
      [[4, 4], ["soeun", "somin"], "공동 우승일경우"],
      [[3, 3], ["soeun", "somin"], "이동 없음"],
    ])(
      "이동값: %p, 우승자: %p, %s",
      async (moves, expectedWinners, testCase) => {
        // given
        inputHandler.carNameInput.mockResolvedValue("soeun,somin");
        inputHandler.racingTryCountInput.mockResolvedValue("1");
        moves.forEach((move) => {
          Random.pickNumberInRange.mockReturnValueOnce(move);
        });

        // when
        await game.startGame();

        // then
        const winnerMessage =
          outputHandler.printMessage.mock.calls.slice(-1)[0][0];
        expectedWinners.forEach((winner) => {
          expect(winnerMessage).toContain(winner);
        });
      }
    );
  });
});
