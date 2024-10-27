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
      '우승자가 한 명인 케이스',
      ["pobi,woni", "1"], 
      ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      [[4, 3]]
    ],
    [
      '우승자가 여러 명인 케이스',
      ["a,b,c", "5"], 
      ["a : -----", "b : ----", "c : -----","최종 우승자 : a, c"],
      [[9, 0, 9], [9, 9, 9], [9, 9, 9], [9, 9, 9], [9, 9, 9]]
    ],
    [
      '자동차 이름 입력 시 공백이 있는 케이스',
      ["  gr,  sh  ", "3"], 
      ["gr : ---", "sh : ","최종 우승자 : gr"],
      [[7, 3], [4, 3], [5, 2]]
    ]
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

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
