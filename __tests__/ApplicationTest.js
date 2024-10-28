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

  test("공동우승자 확인", async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "2"];
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("이동을 둘다 못해서 우승자 없음", async () => {
    // given
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const logs = ["pobi : ", "woni : ", "최종 우승자 : 없음"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([STOP, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("[예외]5글자를 넘은 자동차 이름 예외", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[예외]숫자가 들어간 자동차는 예외", async () => {
    // given
    const inputs = ["pobi,pobi2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[예외]빈 자동차 이름 예외", async () => {
    // given
    const inputs = ["pobi,,java"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[예외]중복 자동차 이름 예외", async () => {
    // given
    const inputs = ["pobi,pobi,java"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("[예외]대소문자 중복 자동차 이름 예외", async () => {
    // given
    const inputs = ["poBi,poBi,java"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[예외]이동횟수에 숫자가 0이면 예외", async () => {
    // given
    const inputs = ["pobi,woni", "0"];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("[예외]이동횟수에 숫자가 아니면 예외", async () => {
    // given
    const inputs = ["pobi,woni", "a"];

    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
