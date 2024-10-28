import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const runAppAndExpectLogs = async (inputs, randoms, expectedLogs) => {
  mockQuestions(inputs);
  MissionUtils.Random.pickNumberInRange = jest.fn();
  randoms.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });

  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  const app = new App();
  await app.run();

  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

describe("기본 입력 관련 테스트", () => {
  test("기본 입력", async () => {
    const inputs = ["pobi,woni", "1"];
    const randoms = [4, 3];
    const expectedLogs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];

    await runAppAndExpectLogs(inputs, randoms, expectedLogs);
  });

  test("공동 우승자", async () => {
    const inputs = ["pobi,woni", "1"];
    const randoms = [4, 4];
    const expectedLogs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];

    await runAppAndExpectLogs(inputs, randoms, expectedLogs);
  });
});
