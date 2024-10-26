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

  test.each([
    ["pobi,javaji"],
    ["apple,b+na,tree"],
    ["apple"],
    ["a,b,c,d,e,f,g,h,i,j,k"],
    ["apple,apple,apple"],
  ])("입력 받은 자동차 이름 테스트 : carNamesInput = %s", async (input) => {
    // given
    const inputs = [input];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test.each([
    ["pobi,woni", "a"],
    ["pobi,woni", ""],
    ["pobi,woni", "0"],
    ["pobi,woni", "101"],
  ])(
    "유효하지 않은 시도 횟수 입력 시 에러 발생: carNamesInput = %s, tryCountInput = %s",
    async (carNamesInput, tryCountInput) => {
      // given
      const inputs = [carNamesInput, tryCountInput];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow("[ERROR]");
    }
  );
});
