import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

describe("게임 진행 기능", () => {
  test("무작위 값에 따른 자동차 이동 여부 확인", () => {
    const app = new App();
    const carNames = ["pobi", "woni", "jun"];
    const moveAttempts = 3;

    mockRandomNumbers([4, 4, 4, 4, 3, 3, 4, 3, 3]);

    const results = app.race(carNames, moveAttempts);

    expect(results).toEqual(["---", "-", "-"]);
  });

  test("시도 횟수만큼 게임이 진행되는지 확인", () => {
    const app = new App();
    const carNames = ["pobi", "woni"];
    const moveAttempts = 2;

    mockRandomNumbers([4, 3, 3, 4]);

    const results = app.race(carNames, moveAttempts);

    expect(results).toEqual(["-", "-"]);
  });
});
