import RacingGame from "../src/RacingGame";

const mockGame = (repeatCount, cars) => {
  const game = new RacingGame(repeatCount, cars);
  game.play = jest.spyOn(game, "play");
  Object.keys(game.cars).forEach((name) => {
    jest.spyOn(game.cars[name], "move");
  });
  return game;
};

describe("경주 게임", () => {
  describe("입력받은 횟수만큼 경주 게임을 반복한다.", () => {
    test("경주 게임이 있고 반복 횟수가 2회인 경우, 경주 게임을 시작하면, 게임을 두 번 반복한다.", () => {
      // given
      const REPEAT_COUNT = 2;
      const CARS = "pobi,ham";
      const game = mockGame(REPEAT_COUNT, CARS);

      // when
      game.start();

      // then
      expect(game.play).toBeCalledTimes(REPEAT_COUNT);
    });

    test("경주 게임이 있고 반복 횟수 2회와 자동차 두 대가 주어진 경우, 경주 게임을 시작하면, 각 자동차는 자동차는 두 번 전진 또는 멈춘다.", () => {
      // given
      const REPEAT_COUNT = 2;
      const CARS = "ham,pobi";
      const game = mockGame(REPEAT_COUNT, CARS);

      // when
      game.start();

      // then
      Object.keys(game.cars).forEach((name) => {
        expect(game.cars[name].move).toBeCalledTimes(REPEAT_COUNT);
      });
    });
  });
});
