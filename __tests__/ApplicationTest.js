import App from "../src/App.js";
import { MissionUtils, Console } from "@woowacourse/mission-utils";

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
  test("기능 테스트 - 최종 우승자가 1명인 경우", async () => {
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

  test("기능 테스트 - 최종 우승자가 2명 이상인 경우", async () => {
  const MOVING_FORWARD = 4;
  const inputs = ["pobi,jun", "1"];
  const logs = ["pobi : -", "jun : -", "최종 우승자 : pobi, jun"];
  const logSpy = getLogSpy();

  mockQuestions(inputs);
  mockRandoms([MOVING_FORWARD, MOVING_FORWARD]);

  const app = new App();
  await app.run();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  });

  test("예외 테스트 - 자동차의 이름을 5글자 초과하여 입력한 경우", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 경주할 자동차에 쉼표를 구분자로 입력하지 않은 경우", async () => {
    const inputs = ["pobi; javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 경주할 자동차에 쉼표뿐만 아니라 다른 구분자도 입력한 경우", async () => {
    const inputs = ["pobi, javaji; wnin"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });


  test("예외 테스트 - 시도할 횟수에 음수를 입력한 경우", async () => {
    const inputs = ["pobi,javai"];
    mockQuestions(inputs);
    const numbers = [-3];
    mockRandoms(numbers);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도할 횟수에 실수를 입력한 경우", async () => {
    const inputs = ["pobi,javai"];
    mockQuestions(inputs);
    const numbers = [3.5];
    mockRandoms(numbers);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트 - 시도할 횟수에 숫자가 아닌 것을 입력한 경우", async () => {
    const inputs = ["pobi,javai"];
    mockQuestions(inputs);
    const numbers = ['one'];
    mockRandoms(numbers);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});

