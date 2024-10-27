import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 2", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test.each([
    [
      "자동차 이름을 1개 입력받아도 경기가 진행된다.",
      ["a", "1"],
      [MOVING_FORWARD],
      ["a : -", "최종 우승자 : a"],
    ],
    [
      "자동차 이름에 특수 문자가 있어도 경기가 진행된다.",
      ["$a,b1", "2"],
      [STOP, MOVING_FORWARD, STOP, MOVING_FORWARD],
      ["$a : ", "b1 : --", "최종 우승자 : b1"],
    ],
    [
      "자동차 이름을 입력 받을 때, 쉼표(,) 양 옆에 이름이 없어도 경기가 진행된다.",
      ["1,3", "2"],
      [MOVING_FORWARD, MOVING_FORWARD, STOP, STOP],
      ["1 : -", "3 : -", "최종 우승자 : 1, 3"],
    ],
    [
      "자동차 이름을 입력 받을 때, 쉼표(,) 양 옆에 이름이 없어도 경기가 진행된다.",
      [",1,,3,", "1"],
      [MOVING_FORWARD, MOVING_FORWARD],
      ["1 : -", "3 : -", "최종 우승자 : 1, 3"],
    ],
  ])("기능: %s", async (_, inputs, movements, outputs) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(movements);

    const app = new App();
    await app.run();

    outputs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    ["자동차 이름은 하나도 없으면 안된다.", ["", "1"]],
    ["자동차 이름이 중복되면 안된다.", ["a,a", "1"]],
    ["시도 횟수는 반드시 입력 받는다.", ["a", ""]],
    ["시도 횟수는 0일 수 없다.", ["a", "0"]],
    ["시도 횟수는 음수일 수 없다.", ["a", "-1"]],
  ])("예외: %s", async (_, inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
