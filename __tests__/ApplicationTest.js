import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_BLANK,ERROR_STRING_OVER_5,ERROR_DUPLICATE,ERROR_INVALID_MOVE_COUNT,ERROR_INVALID_INPUT_TYPE } from "../src/constants/errorContants.js";

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

const MOVING_FORWARD = 4;
const STOP = 3;

describe("자동차 경주", () => {
  test("기능 테스트 0", async () => {
    // given    
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
    [[","]],
    [[" , ,"]],
    [["   ,  , dalsi"]] 
  ])("⚠️ 예외 : 자동차 이름 공백 입력 테스트 %#", async (inputs) => {
    // given
    mockQuestions(inputs);
  
    // when
    const app = new App();
  
    // then
    await expect(app.run()).rejects.toThrow(ERROR_BLANK);
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
    await expect(app.run()).rejects.toThrow(ERROR_STRING_OVER_5);
  });

  test.each([
    [["pobi,jamso,jamso"]],
    [[" jonny, woker,jonny"]] ,
    [["talis, jack,jack  "]], 
    [["dani, dani "]],
    [["danie, danie "]]
  ])("⚠️ 예외 : 중복되는 자동차 이름 입력 테스트 %#", async (inputs) => {
    // given
    mockQuestions(inputs);
  
    // when
    const app = new App();
  
    // then
    await expect(app.run()).rejects.toThrow(ERROR_DUPLICATE);
  });
  
});
