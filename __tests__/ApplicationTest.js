import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
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

  test("공동 우승자 안내문구 기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const MOVING_FORWARD_2 = 4;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD_2]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름을 공백으로 입력했을 때 예외 테스트", async () => {
    // given
    const inputs = [""]; // 빈 문자열을 입력합니다.
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 이름은 공백이 올 수 없습니다.");
  });

  test("자동차 이름이 5자 이상일 때 예외 테스트", async () => {
    // given
    const invalidInput = ["pobbbi,woni"]; // 시도 횟수로 유효하지 않은 값
    mockQuestions(invalidInput);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 이름은 5자 이하만 가능합니다.");
  });

  test("자동차 이름을 중복으로 입력했을 때 예외 테스트", async () => {
    // given
    const invalidInput = ["pobi,pobi"]; // 시도 횟수로 유효하지 않은 값
    mockQuestions(invalidInput);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 이름은 중복될 수 없습니다.");
  });

  test("시도 횟수를 유효하지 않은 값으로 입력했을 경우 예외 테스트", async () => {
    // given
    const invalidInput = ["pobi,woni", "abc"]; // 시도 횟수로 유효하지 않은 값
    mockQuestions(invalidInput);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 숫자를 입력해야 합니다.");
  });
});
