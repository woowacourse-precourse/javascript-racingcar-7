import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import RacingGameModel from "../src/models/RacingGameModel.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Model 테스트", () => {
  test("랜덤 숫자가 4 이상 일 때 전진하여 대쉬(-)가 추가된다.", async () => {
    const game = new RacingGameModel(["car1"], 1);
    mockRandoms([5]);
    game.raceCars();

    expect(game.movingForward[0].length).toBe(1);
  });

  test("랜덤 숫자가 4 미만 일 때 이동하지 않는다.", async () => {
    const game = new RacingGameModel(["car1"], 1);
    mockRandoms([3]);
    game.raceCars();

    expect(game.movingForward[0].length).toBe(0);
  });

  test("단독 우승일 경우.", async () => {
    const game = new RacingGameModel(["car1", "car2"], 3);
    mockRandoms([5, 1, 5, 1, 5, 1]);

    for (let i = 0; i < 3; i++) {
      game.raceCars();
    }

    const winners = game.getWinner();
    expect(winners).toEqual(["car1"]);
  });

  test("우승가 여럿일 경우.", async () => {
    const game = new RacingGameModel(["car1", "car2"], 3);
    mockRandoms([5, 5, 5, 5, 5, 5]);

    for (let i = 0; i < 3; i++) {
      game.raceCars();
    }

    const winners = game.getWinner();
    expect(winners).toEqual(["car1", "car2"]);
  });
});
