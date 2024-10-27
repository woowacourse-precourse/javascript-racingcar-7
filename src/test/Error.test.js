import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../App.js";
import { ERROR } from "../constants/index.js";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };

test("예외 테스트", async () => {
  // given
  const inputs = [""];
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(ERROR.EMPTY_CAR_STRING_MESSAGE);
});

test("예외 테스트", async () => {
  // given
  const inputs = ["pobi,woni,jun", ""];
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(ERROR.EMPTY_COUNT_MESSAGE);
});

test("예외 테스트", async () => {
  // given
  const inputs = ["pobi,woni,jun", "-1"];
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(ERROR.NONE_POSITIVE_COUNT_MESSAGE);
});