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

describe("기능 테스트", () => {
  test.each([
    {
      inputs: ["pobi,woni", "1"],
      logs: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      randoms: [4, 3],
    },
    {
      inputs: ["pobi,woni,jun", "3"],
      logs: [
        "pobi : -",
        "woni : -",
        "jun : ",
        "pobi : --",
        "woni : -",
        "jun : ",
        "pobi : --",
        "woni : -",
        "jun : ",
        '우승자가 가려지지 않았습니다.',
        '가장 많이 이동한 자동차 : pobi'
      ],
      randoms: [4, 4, 3, 4, 3, 3, 3, 3, 3],
    }
  ])("우승자 여부에 따른 테스트", async ({ inputs, logs, randoms }) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("예외 테스트", () => {
  const testCases = [
    {
      inputs: ["pobi,javaji"],
      expectedError: "[ERROR] 모든 자동차 이름은 다섯 글자 이하로 입력해야 합니다.",
    },
    {
      inputs: [", pobi, "],
      expectedError: "[ERROR] 모든 자동차 이름은 한 글자 이상 입력해야 합니다.",
    },
  ];

  test.each(testCases)(
    "입력: $inputs 에 대한 예외 테스트",
    async ({ inputs, expectedError }) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(expectedError);
    }
  )
})
