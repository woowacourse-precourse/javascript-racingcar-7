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

  // Add test
  test("자동차 이름을 쉼표(,)를 기준으로 구분한다.", () => {
    const racingCarNames = "pobi,woni";

    const app = new App();
    const racingCarNamesArray = app.parseRacingCarNames(racingCarNames);

    expect(racingCarNamesArray).toEqual(["pobi", "woni"]);
  });

  test("무작위 값이 4 이상일 경우 전진한다.", () => {
    const app = new App();

    expect(app.isCarMove(4)).toBe(true);
    expect(app.isCarMove(5)).toBe(true);
    expect(app.isCarMove(9)).toBe(true);
    expect(app.isCarMove(3)).toBe(false);
    expect(app.isCarMove(0)).toBe(false);
  });

  test("매 시도에서 실행 결과를 출력한다.", () => {
    const moveCntPerCar = { pobi: 1, woni: 2 };

    const app = new App();
    const logSpy = getLogSpy();
    app.printAttemptResult(moveCntPerCar);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : --"));
  });

  test("최종 우승자를 출력한다.", () => {
    const moveCntPerCar = { pobi: 1, woni: 2 };

    const app = new App();
    const logSpy = getLogSpy();
    app.printWinner(moveCntPerCar);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : woni")
    );
  });

  test("우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.", () => {
    const moveCntPerCar = { pobi: 2, woni: 2 };

    const app = new App();
    const logSpy = getLogSpy();
    app.printWinner(moveCntPerCar);

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, woni")
    );
  });

  test("자동차 이름이 5자를 초과할 경우 에러를 출력한다.", async () => {
    const inputs = ["pobiyy,woni", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
