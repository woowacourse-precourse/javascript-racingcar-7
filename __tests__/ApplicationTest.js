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
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
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

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("공동 우승하는 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,jun", "5"];
    const logs = [
      "pobi : -",
      "woni : ",
      "jun : -",
      "pobi : --",
      "woni : -",
      "jun : --",
      "pobi : ---",
      "woni : --",
      "jun : ---",
      "pobi : ----",
      "woni : ---",
      "jun : ----",
      "pobi : -----",
      "woni : ----",
      "jun : -----",
      "최종 우승자 : pobi, jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름에 문자와 공백이 함께 있는 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["po bi,woni , jisu", "1"];
    const logs = ["po bi : -", "woni : ", "jisu : ", "최종 우승자 : po bi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름이 특수문자인 경우", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["@,#,$,/", "1"];
    const logs = ["@ : -", "# : ", "$ : -", "/ : ", "최종 우승자 : @, $"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("빈 문자열을 입력한 경우", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 비어있을 수 없습니다."
    );
  });

  test("자동차 이름 중 공백이 있는 경우", async () => {
    const inputs = ["pobi, ,woni", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 공백일 수 없습니다."
    );
  });

  test("자동차 이름이 모두 공백인 경우", async () => {
    const inputs = [" ,  ,   ", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 공백일 수 없습니다."
    );
  });

  test("자동차 이름이 5자를 초과하는 경우", async () => {
    const inputs = ["pobi,hwanghyoju", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });

  test("자동차 이름이 중복된 경우", async () => {
    const inputs = ["pobi,pobi,woni", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 중복될 수 없습니다."
    );
  });

  test("시도할 횟수가 숫자가 아닌 문자열일 경우", async () => {
    const inputs = ["pobi,woni,jun", "five"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다."
    );
  });

  test("시도할 횟수가 음수인 경우", async () => {
    const inputs = ["pobi,woni,jun", "-3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다."
    );
  });

  test("시도할 횟수가 0인 경우", async () => {
    const inputs = ["pobi,woni,jun", "0"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도할 횟수는 1 이상의 숫자여야 합니다."
    );
  });
});
