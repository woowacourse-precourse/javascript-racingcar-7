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

  test("기능 테스트2", async () => {
    // given
    // const MOVING_FORWARD = 4;
    // const STOP = 3;
    //이 3이 총 경주 횟수가 아니라 차량이 한 번 무작위값을 던지는 수였군...????
    const inputs = ["치킨,닭,다리", "9"];
    const logs = [
      "치킨 : ---",
      "닭 : ---",
      "다리 : ---",
      "최종 우승자 : 치킨, 닭, 다리",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 4, 4, 4, 4, 4, 4, 4]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트3", async () => {
    // given
    // const MOVING_FORWARD = 4;
    // const STOP = 3;
    //이 3이 총 경주 횟수가 아니라 차량이 한 번 무작위값을 던지는 수였군...
    // const inputs = ["소형차,중형차,대형차", "3"];
    //아닌가? 3으로 해도 되고 9로 해도 되는데 뭐지
    const inputs = ["소형차,중형차,대형차", "13"];
    const logs = [
      "소형차 : ",
      "중형차 : ",
      "대형차 : ---",
      "최종 우승자 : 대형차",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([1, 2, 9, 1, 2, 9, 2, 3, 9]);

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
