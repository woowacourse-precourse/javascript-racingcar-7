import App from "../src/App.js";
import { checkAttemptNum, checkCarsName } from "../src/validation.js";
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
});

describe("input validation", () => {
  test("자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.", () => {
    expect(() => checkCarsName(["pobi", "woni"])).not.toThrow();
    expect(() => checkCarsName(["pobi", "woni", "abcdefg"])).toThrow("[ERROR]");
    expect(() => checkCarsName([""])).toThrow("[ERROR]");
    expect(() => checkCarsName(["pobi", "woni", ""])).toThrow("[ERROR]");
  });

  test("사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.(양의 정수)", () => {
    expect(() => checkAttemptNum(3)).not.toThrow();
    expect(() => checkAttemptNum()).toThrow("[ERROR]");
    expect(() => checkAttemptNum(0)).toThrow("[ERROR]");
    expect(() => checkAttemptNum(-1)).toThrow("[ERROR]");
  });
});
