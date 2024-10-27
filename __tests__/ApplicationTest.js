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

  test("이동 횟수 설정 오류 테스트", async () => {
    // given
    const inputs = ["pobi,woni", "invalid"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
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
});

test("자동차 이름 길이 제한 오류 테스트", async () => {
  // given
  const inputs = ["pobi,javaji"]; // 5자 초과 이름 포함
  mockQuestions(inputs);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow("[ERROR]");
});

test("전진 조건을 충족하는 경우", async () => {
  // given
  const inputs = ["pobi,woni", "1"];
  const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
  const logSpy = getLogSpy();

  mockQuestions(inputs);
  mockRandoms([4, 4]); // 모든 자동차가 전진

  // when
  const app = new App();
  await app.run();

  // then
  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});

test("모든 자동차가 멈추는 경우", async () => {
  // given
  const inputs = ["pobi,woni", "1"];
  const logs = ["pobi : ", "woni : ", "최종 우승자 : pobi, woni"];
  const logSpy = getLogSpy();

  mockQuestions(inputs);
  mockRandoms([3, 3]); // 모든 자동차가 멈춤

  // when
  const app = new App();
  await app.run();

  // then
  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
