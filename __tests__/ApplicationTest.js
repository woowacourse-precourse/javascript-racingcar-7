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
  describe("기능 테스트", () => {
    test("최종 우승자가 1명인 경우", async () => {
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const inputs = ["pobi,woni", "1"];
      const logs = [
        "pobi : -",
        "woni : ",
        "pobi : --",
        "woni : ",
        "pobi : ---",
        "woni : ",
        "pobi : ----",
        "woni : ",
        "pobi : -----",
        "woni : ",
        "최종 우승자 : pobi",
      ];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);
      mockRandoms([MOVING_FORWARD, STOP]);
      mockRandoms([MOVING_FORWARD, STOP]);
      mockRandoms([MOVING_FORWARD, STOP]);
      mockRandoms([MOVING_FORWARD, STOP]);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });

    test("최종 우승자가 5명인 경우", async () => {
      const MOVING_FORWARD = 4;
      const STOP = 3;
      const inputs = ["pobi,woni,guesung,hyunjin,guehyeok", "2"];
      const logs = [
        "pobi : -",
        "woni : ",
        "guesung : ",
        "hyunjin : ",
        "guehyeok : ",
        "pobi : -",
        "woni : -",
        "guesung : ",
        "hyunjin : ",
        "guehyeok : ",
        "pobi : -",
        "woni : -",
        "guesung : -",
        "hyunjin : ",
        "guehyeok : ",
        "pobi : -",
        "woni : -",
        "guesung : -",
        "hyunjin : -",
        "guehyeok : ",
        "pobi : -",
        "woni : -",
        "guesung : -",
        "hyunjin : -",
        "guehyeok : -",
        "최종 우승자 : pobi,woni,guesung,hyunjin,guehyeok",
      ];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms([MOVING_FORWARD, STOP]);
      mockRandoms([STOP, MOVING_FORWARD]);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe("입력 1번 예외 테스트", () => {
    test("5글자 이상의 문자가 올 경우 에러를 출력한다.", async () => {
      const inputs = ["pobi,javaji"];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });

  describe("입력 2번 예외 테스트", () => {
    test("양수가 아닌 경우 에러를 출력한다.", async () => {
      const inputs = ["pobi,java", -5];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
    test("정수가 아닌 경우 에러를 출력한다.", async () => {
      const inputs = ["pobi,java", 5.5];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });
});
