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
  test("기능 테스트 0", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobio,woni", "5"];
    const logs = ["pobio : -", "woni : ", "최종 우승자 : pobio"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 1", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobai,woni,dalsi", "2"];
    const logs = [
      "pobai : -",
      "woni : ",
      "dalsi : -",
      "pobai : --",
      "woni : ",
      "dalsi : --",
      "최종 우승자 : pobai, dalsi",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 2", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobai,woni,dalsi", "1"];
    const logs = [
      "pobai : ",
      "woni : ",
      "dalsi : ",
      "최종 우승자 : pobai, woni, dalsi",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, STOP, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    [["pobi, "]],
    [[","]] 
  ])("⚠️ 예외 : 자동차 이름 공백 입력 테스트 %#", async (inputs) => {
    // given
    mockQuestions(inputs);
  
    // when
    const app = new App();
  
    // then
    await expect(app.run()).rejects.toThrow("[ERROR] : 공백은 입력될 수 없습니다.");
  });

  test.each([
    [["pobi,jamson"]],
    [[" jonny, worker"]] ,
    [["talisker, jack  "]], 
    [["jack c, dani "]],
    [["jack, daniels "]]
  ])("⚠️ 예외 : 6자이상 자동차 이름 입력 테스트 %#", async (inputs) => {
    // given
    mockQuestions(inputs);
  
    // when
    const app = new App();
  
    // then
    await expect(app.run()).rejects.toThrow("[ERROR] : 자동차 이름은 5자 이하만 가능합니다.");
  });
  
});
