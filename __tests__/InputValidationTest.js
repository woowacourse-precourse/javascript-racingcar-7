import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 입력 관련 예외 테스트", () => {
  test("자동차 이름의 길이가 1 ~ 5 범위를 벗어나는 경우", async () => {
    const inputs = ["멋진 자동차,asdf"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run().rejects.toThrow("[ERROR]"));
  });
});
