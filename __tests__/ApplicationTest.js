import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Input from "../src/view/Input.js";
import Output from "../src/view/Output.js";
import RacingGame from "../src/model/RacingGame.js";
import { OUTPUT_PRINT_MESSAGES } from "../src/constants/printMessage.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  let app;
  beforeEach(() => {
    app = new App(Input, Output, new RacingGame());
  });

  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = [OUTPUT_PRINT_MESSAGES.resultTitle, "pobi : -", "woni : ", OUTPUT_PRINT_MESSAGES.winners("pobi")];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
