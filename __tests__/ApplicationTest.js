import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import {
  ERROR_MESSAGE_CAR_NAME_DUPLICATION,
  ERROR_MESSAGE_CAR_NAME_INVALID,
  ERROR_MESSAGE_NOT_INTEGER,
  ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
  OUTPUT_MESSAGE_WINNER,
} from "../src/constants.js";

const MOVING_FORWARD = 4;
const STOP = 3;

const testCaseArrayOfFunctionalTest = [
  {
    title: "최종 우승자가 1명인 경우",
    inputs: ["pobi,woni", "5"],
    logs: [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : ",
      "pobi : ---",
      "woni : ",
      "pobi : ----",
      "woni : ",
      "pobi : -----",
      "woni : ",
      `${OUTPUT_MESSAGE_WINNER}pobi`,
    ],
    randomDataArray: [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
    ],
  },
  {
    title: "최종 우승자가 5명인 경우",
    inputs: ["pobi,woni,gue,hyun,hyek", "5"],
    logs: [
      "pobi : -",
      "woni : ",
      "gue : ",
      "hyun : ",
      "hyek : ",
      "pobi : -",
      "woni : -",
      "gue : ",
      "hyun : ",
      "hyek : ",
      "pobi : -",
      "woni : -",
      "gue : -",
      "hyun : ",
      "hyek : ",
      "pobi : -",
      "woni : -",
      "gue : -",
      "hyun : -",
      "hyek : ",
      "pobi : -",
      "woni : -",
      "gue : -",
      "hyun : -",
      "hyek : -",
      `${OUTPUT_MESSAGE_WINNER}pobi, woni, gue, hyun, hyek`,
    ],
    randomDataArray: [
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
    ],
  },
];

const testCaseExceptionArrayOfCarNameArray = [
  {
    title: "자동차 이름이 5글자 초과인 경우",
    inputs: ["pobi,javaji"],
    errorMessage: ERROR_MESSAGE_CAR_NAME_INVALID,
  },
  {
    title: "자동차 이름이 1글자 미만인 경우",
    inputs: ["pobi,"],
    errorMessage: ERROR_MESSAGE_CAR_NAME_INVALID,
  },
  {
    title: "자동차 이름이 알파벳, 숫자 혹은 언더바(`_`)가 아닌 경우",
    inputs: ["pobi,$gue"],
    errorMessage: ERROR_MESSAGE_CAR_NAME_INVALID,
  },
  {
    title: "자동차 이름이 중복되는 경우",
    inputs: ["pobi,pobi", 1],
    errorMessage: ERROR_MESSAGE_CAR_NAME_DUPLICATION,
  },
];

const testCaseExceptionArrayOfTryCount = [
  {
    title: "양수가 아닌 경우",
    inputs: ["pobi,java", 0],
    errorMessage: ERROR_MESSAGE_NOT_POSITIVE_POSITIVE,
  },
  {
    title: "정수가 아닌 경우",
    inputs: ["pobi,java", 5.5],
    errorMessage: ERROR_MESSAGE_NOT_INTEGER,
  },
];

const testCaseExceptionArray = [
  {
    title: "자동차 이름 예외 테스트",
    testCaseExceptionArray: testCaseExceptionArrayOfCarNameArray,
  },
  {
    title: "시도 횟수 예외 테스트",
    testCaseExceptionArray: testCaseExceptionArrayOfTryCount,
  },
];

describe("자동차 경주", () => {
  describe("기능 테스트", () => {
    test.each(testCaseArrayOfFunctionalTest)(
      "$title",
      async ({ inputs, randomDataArray, logs }) => {
        const logSpy = getLogSpy();
        mockQuestions(inputs);
        mockRandoms(randomDataArray);

        const app = new App();
        await app.run();

        logs.forEach((log) => {
          expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
        });
      }
    );
  });

  describe.each(testCaseExceptionArray)(
    "$title",
    ({ testCaseExceptionArray }) => {
      test.each(testCaseExceptionArray)(
        "$title",
        async ({ inputs, errorMessage }) => {
          mockQuestions(inputs);

          const app = new App();

          await expect(app.run()).rejects.toThrow(errorMessage);
        }
      );
    }
  );
});

function mockQuestions(inputs) {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
}

function mockRandoms(numbers) {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
}

function getLogSpy() {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
}
