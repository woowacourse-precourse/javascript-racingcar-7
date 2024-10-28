import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("예외 테스트", () => {
  test("자동차 이름이 5자 이하가 아닌 경우", async () => {
    // given
    const inputs = ["po bid, wodeni", "5"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름에 공백이 포함되어 있을 때", async () => {
    // given
    const inputs = ["pobi, ,woni", "2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("자동차 이름이 비어있을 때", async () => {
    // given
    const inputs = ["po bi, woni", "2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("자동차가 한 대일 경우", async () => {
    // given
    const inputs = ["pobi", "2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
