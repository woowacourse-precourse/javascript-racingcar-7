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

  // 추가 테스트
  test.each([[["가나다,test"]], [["test1,longTest"]], [["test,test"]]])(
      "자동차 이름 오류 테스트",
      async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
      }
  );

  test.each([[["pobi,woni,jun"], "t"], [["pobi,woni,jun"], -1]])(
      "시도 횟수 입력 오류 테스트",
      async (inputs) => {
        // given
        mockQuestions(inputs);

        // when
        const app = new App();

        // then
        await expect(app.run()).rejects.toThrow("[ERROR]");
      }
  );

  test("최종 우승자 `,` 확인", async () => {
    // given
    const MOVING_FORWARD = 9;
    const STOP = 9;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("최종 우승자 : pobi, woni"));
  });
});
