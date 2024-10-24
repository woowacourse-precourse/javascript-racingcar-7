import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

/*const mockQuestions = (inputs) => {
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
});*/


import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 이름 유효성 검사", () => {
  test("자동차 이름은 5자 이하일 경우 성공적으로 추가된다.", async () => {
    // given
    const inputs = ["pobi,woni"]; // 유효한 이름
    mockQuestions(inputs);
    const app = new App();

    // when
    const raceCarStatus = await app.run();

    // then
    expect(raceCarStatus[0]).toBe("success");
  });

  test("자동차 이름이 6자 초과인 경우 에러를 발생시킨다.", async () => {
    // given
    const inputs = ["pobimaru,woni"]; // 6자 초과 이름
    mockQuestions(inputs);
    const app = new App();

    // when & then
    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 최대 5글자여야 합니다.");
  });

  test("중복된 자동차 이름이 입력될 경우 에러를 발생시킨다.", async () => {
    // given
    const inputs = ["pobi,woni,pobi"]; // 중복된 이름
    mockQuestions(inputs);
    const app = new App();

    // when & then
    await expect(app.run()).rejects.toThrow("[ERROR] 중복된 참가자가 있습니다: \"pobi\"");
  });
});
