import { MissionUtils } from "@woowacourse/mission-utils";
import RacingGame from "../src/model/RacingGame.js";

const mockGame = (repeatCount, cars) => {
  const game = new RacingGame();
  game.setGame(cars, repeatCount);
  return game;
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe("경주 게임", () => {
  describe("입력받은 횟수만큼 경주 게임을 반복한다.", () => {
    test("경주 게임이 있고 반복 횟수가 2회인 경우, 경주 게임을 시작하면, 게임을 두 번 반복한다.", () => {
      // given
      const REPEAT_COUNT = 2;
      const CARS = ["pobi", "ham"];
      const game = mockGame(REPEAT_COUNT, CARS);

      // when
      game.start();

      // then
      expect(game.getRaceLogs().length).toBe(REPEAT_COUNT);
    });
  });

  describe("우승자를 구한다.", () => {
    test("경주 게임이 있고 pobi가 ham보다 이동 거리가 큰 경우, 자동차 경주 게임을 완료하면, pobi를 우승자로 선정한다.", () => {
      // given
      const REPEAT_COUNT = 1;
      const MOVING_FORWARD = 4;
      const STOP = 3;

      const CARS = ["pobi", "ham"];
      const game = mockGame(REPEAT_COUNT, CARS);
      mockRandoms([MOVING_FORWARD, STOP]);

      // when
      game.start();

      // then
      expect(game.getWinners()).toEqual(["pobi"]);
    });
  });
});
