import RacingGame from "../src/RacingGame";

const mockGame = (repeatCount) => {
  const game = new RacingGame(repeatCount);
  game.play = jest.fn();
  return game;
};

describe("경주 게임", () => {
  describe("입력받은 횟수만큼 경주 게임을 반복한다.", () => {
    test("경주 게임이 있고 반복 횟수가 2회인 경우, 경주 게임을 시작하면, 게임을 두 번 반복한다.", () => {
      // given
      const REPEAT_COUNT = 2;
      const game = mockGame(REPEAT_COUNT);

      // when
      game.start();

      // then
      expect(game.play).toBeCalledTimes(REPEAT_COUNT);
    });
  });
});
