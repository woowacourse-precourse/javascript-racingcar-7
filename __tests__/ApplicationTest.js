import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockrandomArray = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test.each([
    {
      description: "기능 테스트",
      inputs: ["pobi,woni", "1"],
      randomArray: [4, 3],
      printRoundResult: ["pobi : -", "woni : ", "최종 우승자 : pobi"],
    },
    {
      description: "예외 테스트",
      inputs: ["pobi,javaji"],
      isError: true,
      printErrorMessage: "[ERROR]",
    },
    {
      description: "라운드가 2이상일 경우",
      inputs: ["pobi,woni,java", "3"],
      randomArray: [4, 3, 3, 4, 4, 4, 4, 4, 4],
      printRoundResult: [
        "pobi : -",
        "woni : ",
        "java : ",
        "pobi : --",
        "woni : -",
        "java : -",
        "pobi : ---",
        "woni : --",
        "java : --",
        "최종 우승자 : pobi",
      ],
    },
    {
      description: "우승자가 2명 이상일 경우",
      inputs: ["pobi,woni,java", "3"],
      randomArray: [4, 4, 4, 4, 4, 4, 4, 4, 4],
      printRoundResult: [
        "pobi : -",
        "woni : ",
        "java : ",
        "pobi : --",
        "woni : -",
        "java : -",
        "pobi : ---",
        "woni : --",
        "java : --",
        "최종 우승자 : pobi, woni, java",
      ],
    },
    {
      description: "참가자가 1명일 경우",
      inputs: ["pobi", "1"],
      randomArray: [4],
      printRoundResult: ["pobi : -", "최종 우승자 : pobi"],
    },
    {
      description: "참가자가 1명이고 이동하지 못할 경우",
      inputs: ["pobi", "1"],
      randomArray: [1],
      printRoundResult: ["pobi : ", "최종 우승자 : pobi"],
    },
    {
      description: "한명도 이동을 못할 경우",
      inputs: ["pobi,woni,java", "3"],
      randomArray: [3, 3, 3, 3, 3, 3, 3, 3, 3],
      printRoundResult: [
        "pobi : ",
        "woni : ",
        "java : ",
        "pobi : ",
        "woni : ",
        "java : ",
        "pobi : ",
        "woni : ",
        "java : ",
        "최종 우승자 : pobi, woni, java",
      ],
    },
  ])("$description", async ({ inputs, randomArray, printRoundResult, isError, printErrorMessage }) => {
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    
    if (randomArray) {
      mockrandomArray(randomArray);
    }
    
    const app = new App();
    
    if (isError) {
      await expect(app.run()).rejects.toThrow(printErrorMessage);
    } else {
      await app.run();
      printRoundResult.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    }
  });
});
