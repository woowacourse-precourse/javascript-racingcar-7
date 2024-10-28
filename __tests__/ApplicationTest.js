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

  test("예외 테스트 - 여러 입력 값 검사", async () => {
    const invalidInputs = [
      ["","1"],             // 빈 이름
      ["pobi,javaji", "1"], // 이름 5자 초과
      ["pobi,,", "1"],      // 빈 이름 포함
      ["pobi,pobi", "1"],   // 중복 이름 포함
      ["pobi", "다섯번"],   // 시도 횟수에 숫자 외 문자 포함
      ["pobi", "1.5"],      // 시도 횟수에 소수 포함
      ["pobi", "101"],      // 시도 횟수에 1 ~ 100 범위를 넘는 숫자 포함
      ["pobi", ""]          // 빈 시도 횟수
    ];

    for (const inputs of invalidInputs) { 
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  });
});
