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

  test("사용자가 아무 값도 입력하지 않은 경우", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름 중 5글자 이상이 있는 경우", async () => {
    const inputs = ["aaa,apple,banana,hiii"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  describe("자동차 개수 검증", () => {
    test.each([
      ["kanada"],
      [""],
      ["woowa"],
    ])("경주할 자동차를 2대 미만으로 입력한 경우", async (invalidInput) => {

      const inputs = ["pobi,woni", invalidInput];
      mockQuestions(inputs);
      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });

  describe("자동차 이름 검증", () => {
    test.each([
      ["lucky7,nn,3^"],
      ["h2,mysql,h!h!"],
    ])("사용자가 입력한 자동차 이름에 쉼표가 아닌 특수문자나 숫자가 있는 경우", async (invalidInput) => {

      const inputs = ["pobi,woni", invalidInput];
      mockQuestions(inputs);
      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });

  describe("시도 횟수 검증", () => {
    test.each([
      ["0"],
      ["-1"],
      ["-100"],
    ])("사용자가 시도할 횟수로 %s를 입력한 경우", async (invalidInput) => {

      const inputs = ["pobi,woni", invalidInput];
      mockQuestions(inputs);
      const app = new App();

      await expect(app.run()).rejects.toThrow("[ERROR]");
    });
  });

});
