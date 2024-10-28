import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};
describe("자동차 경주 시도 횟수", () => {
  test("시도 횟수가 입력되지 않았거나 공백인 경우", async () => {
    // given
    const inputs = ["pobi,woni", ""];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 숫자가 아닌 값인 경우", async () => {
    // given
    const inputs = ["pobi,woni", "2번"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 음수인 경우", async () => {
    // given
    const inputs = ["pobi,woni", "-5"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수가 0인 경우", async () => {
    // given
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("시도 횟수가 정수가 아닌 경우", async () => {
    // given
    const inputs = ["pobi,woni", "2.2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
