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
  test("콤마 뒤에 아무 이름도 없다면 예외 발생", async () => {
    const inputs = ["pobi,"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름을 5자 이상 입력하면 예외 발생", async () => {
    const inputs = ["pobipobi, woni, junjun"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 0 일경우 예외 발생", async () => {
    const inputs = ["0,aaa,bbbbb"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });


  test("시도 횟수가 음수일경우 예외 발생", async () => {
    const inputs = ["-5,aaaa,bbbb"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});