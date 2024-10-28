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
describe("자동차 경주 테스트", () => {
  test.each([
    ["자동차 이름이 5자를 초과했을 경우", ["minimanimu,mi"]],
    ["자동차 이름에 중복되는 이름이 있을 경우", ["mi,ni,mi"]],
    ["자동차 이름이 공백일 경우", ["mi,,ni"]],
    ["실행 횟수가 숫자가 아닐 경우", ["mi,ni", "apple"]],
    ["실행 횟수가 공백일 경우", ["mi,ni", ""]],
    ["실행 횟수가 0일 경우", ["mi,ni", "0"]],
    ["실행 횟수가 음수일 경우", ["mi,ni", "-12"]],
  ])("%s", async (tests, inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("기능 테스트 - 여러명의 우승자가 발생할 수 있다.", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["min,ji,jea", "1"];
    const logs = ["min : ", "ji : -", "jea : -", "최종 우승자 : ji,jea"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
