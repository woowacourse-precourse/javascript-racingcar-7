import { MissionUtils } from "@woowacourse/mission-utils";
import RacingGame from "../src/RacingGame.js";
import Output from "../src/Output.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("출력", () => {
  describe("자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다.", () => {
    test("경주 게임이 있고 우승자가 한명인 경우, 경주 게임이 끝나고 우승자를 출력하면, 단독 우승자 안내 문구를 출력한다.", () => {
      // given
      const REPEAT_COUNT = 2;
      const CARS = "ham";
      const game = new RacingGame(REPEAT_COUNT, CARS);
      const logSpy = getLogSpy();

      // when
      game.start();
      Output.printWinners(game.getWinners());

      // then
      expect(logSpy).toHaveBeenCalledWith("최종 우승자 : ham");
    });

    test("경주 게임이 있고 우승자가 두명인 경우, 경주 게임이 끝나고 우승자를 출력하면, 공동 우승자 안내 문구를 출력한다.", () => {
      // given
      const REPEAT_COUNT = 1;
      const CARS = "ham,pobi";
      const game = new RacingGame(REPEAT_COUNT, CARS);
      mockRandoms([1, 1]);
      const logSpy = getLogSpy();

      // when
      game.start();
      Output.printWinners(game.getWinners());

      // then
      expect(logSpy).toHaveBeenCalledWith("최종 우승자 : ham, pobi");
    });
  });
});
