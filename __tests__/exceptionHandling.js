import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("예외 처리 테스트", () => {
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
});
