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
  test("자동차 이름이 5자를 초과하면 예외 발생", async () => {
    const inputs = ["juhui,juijuijuijui"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("빈 이름이 입력되면 예외 발생", async () => {
    const inputs = ["juhui,"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 음수일경우 예외 발생", async () => {
    const inputs = ["juhui,jui", "-1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 0 일경우 예외 발생", async () => {
    const inputs = ["juhui,jui", "0"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("우승자가 여러 명일 경우", async () => {
    const inputs = ["juhui,jui", "3"];
    const logs = [
      "juhui : -",
      "jui : -",
      "juhui : --",
      "jui : --",
      "juhui : ---",
      "jui : ---",
      "최종 우승자 : juhui, jui",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 4, 4, 4, 4]); // 둘 다 같은 거리로 전진

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차가 한 번도 전진하지 않을 경우", async () => {
    const inputs = ["juhui,jui", "3"];
    const logs = [
      "juhui : ",
      "jui : -",
      "juhui : ",
      "jui : --",
      "juhui : ",
      "jui : ---",
      "최종 우승자 : jui",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([3, 4, 3, 4, 3, 4]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름에 공백이 포함된 경우 정상 처리", async () => {
    const inputs = ["juhui, jui", 3];
    const logs = [
      "juhui : ",
      "jui : -",
      "juhui : -",
      "jui : -",
      "juhui : -",
      "jui : --",
      "최종 우승자 : jui",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([3, 4, 4, 3, 3, 4]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
