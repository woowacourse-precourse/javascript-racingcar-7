import { MissionUtils } from "@woowacourse/mission-utils";
import RacingGame from "../src/models/RacingGame";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RacingGame 클래스 테스트", () => {
  test("모든 자동차 이동 테스트", () => {
    const game = new RacingGame();
    game.createCars(["pobi", "jini"]);

    mockRandoms([6, 3]);
    game.moveAllCars();

    expect(game.cars[0].position).toBe(1);
    expect(game.cars[1].position).toBe(0);
  });

  test("단독 우승자 테스트", () => {
    const game = new RacingGame();
    game.createCars(["pobi", "jini", "cho"]);

    mockRandoms([6, 3, 1, 6, 3, 1]);
    game.moveAllCars();

    const winner = game.findWinners();
    expect(winner).toEqual(["pobi"]);
  });

  test("공동 우승자 테스트", () => {
    const game = new RacingGame();
    game.createCars(["pobi", "jini", "cho"]);

    mockRandoms([4, 4, 3, 4, 4, 2]);
    game.moveAllCars();

    const winners = game.findWinners();
    expect(winners).toEqual(["pobi", "jini"]);
  });
});
