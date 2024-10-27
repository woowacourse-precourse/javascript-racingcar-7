import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test.each([
    [
      "우승자가 한 명인 케이스",
      ["pobi,woni", "1"],
      ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      [[4, 3]],
    ],
    [
      "우승자가 여러 명인 케이스",
      ["a,b,c", "5"],
      ["a : -----", "b : ----", "c : -----", "최종 우승자 : a, c"],
      [
        [9, 0, 9],
        [9, 9, 9],
        [9, 9, 9],
        [9, 9, 9],
        [9, 9, 9],
      ],
    ],
    [
      "자동차 이름 입력 시 공백이 있는 케이스",
      ["  gr,  sh  ", "3"],
      ["gr : ---", "sh : ", "최종 우승자 : gr"],
      [
        [7, 3],
        [4, 3],
        [5, 2],
      ],
    ],
  ])("기능 테스트 : %s", async (describeCase, inputs, logs, randoms) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms.flat());

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    ["입력 값이 공백인 케이스", [""]],
    ["자동차 이름을 한 개만 작성한 케이스", ["a"]],
    ["자동차 이름을 제대로 입력하지 않은 케이스", ["arr,bar,,,"]],
    ["자동차 이름이 5글자를 넘어가는 케이스", ["gyuri, sihyun"]],
    ["자동차 이름이 중복된 케이스", ["aa,bb,aa"]],
    ["시도할 횟수에 숫자를 적지 않은 케이스", ["a, b, c", "abc"]],
    ["시도할 횟수가 1회 미만인 케이스", ["a, b, c", "-99999"]],
  ])("예외 테스트 : %s", async (describeCase, inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
