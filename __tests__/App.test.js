import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/utils/error.js";

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
  // 주어진 입력에 대한 예상값 검증
  test.each([
    [
      ["pobi,woni", "1"],
      ["pobi : -", "woni : ", "최종 우승자 : pobi"],
      [4, 0],
    ],
    [
      ["alice,bob", "3"],
      ["alice : --", "bob : ---", "최종 우승자 : bob"],
      [2, 5, 5, 6, 6, 7],
    ],
    [
      ["alice,bob", "2"],
      ["alice : --", "bob : --", "최종 우승자 : alice, bob"],
      [5, 6, 5, 6],
    ],
  ])("기능 테스트 - 입력값: %s", async (inputs, expectedLogs, randoms) => {
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  // 잘못된 입력에 대한 에러 검증
  test.each([
    [["pobi,junnnn"], ERROR_MESSAGE.OVER_NAME_LENGTH], // 이름 글자수가 5자 이상인 경우
    [["pobi, woni", "0"], ERROR_MESSAGE.NONE_POSITIVE_NUMBER], // 시도 횟수가 0인 경우
    [["pobi, woni", "-1"], ERROR_MESSAGE.NONE_POSITIVE_NUMBER], // 시도 횟수가 음수인 경우
    [["pobi, woni", " "], ERROR_MESSAGE.NAN_NUMBER], // 시도 횟수가 숫자가 아닌 경우
    [["pobi, woni", "a"], ERROR_MESSAGE.NAN_NUMBER], // 시도 횟수가 숫자가 아닌 경우
    [[", woni", " "], ERROR_MESSAGE.EMPTY_NAME], // 이름이 없는 경우
    [["woni"], ERROR_MESSAGE.ONLY_SINGLE_PLAYER], // 플레이어가 한 명인 경우
    [["aa,bb,cc,dd,ee,ff"], ERROR_MESSAGE.OVER_MAX_PLAYER], // 플레이어가 다섯 명 이상인 경우
    [[" "], ERROR_MESSAGE.ONLY_SINGLE_PLAYER], // 플레이어가 없는 경우
    [["pobi, woni", "12"], ERROR_MESSAGE.OVER_MAX_TURN], // 시도 횟수가 10번을 넘긴 경우
  ])("예외 테스트 - 입력값: %s", async (inputs, expectedError) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(`[ERROR] ${expectedError}`);
  });
});
