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

  // numbers.reduce((acc, number) => {
  //   return acc.mockReturnValueOnce(number);
  // }, MissionUtils.Random.pickNumberInRange);
  numbers.forEach(number => {
    return MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
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
    const A_MOVING_FOWARD = 5;
    const B_MOVING_FOWARD = 9;
    const inputs = ["a,b", "1"];
    const logs = ["a : -", "b : -", "최종 우승자 : a, b"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([A_MOVING_FOWARD, B_MOVING_FOWARD]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("기능 테스트3",  async () => {
    const MOCK_RANDOMS = [5, 1, 5, 1, 1, 5];
    const inputs = ["A,B,C", "2"];
    const logs = [
      "A : -", "B : ", "C : -",
      "A : -", "B : ", "C : --",
      "최종 우승자 : C"
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(MOCK_RANDOMS);

    const app = new App();
    await app.run();

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

  test("음수 입력 예외 테스트", async () => {
    const inputs = ["a,b", "-1"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("이름 크기 초과 예외 테스트", async () => {
    const inputs = ["a,b12345", "1"];
    mockQuestions(inputs);
    
    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  })

  test("입력 없을 시 예외 테스트", async () => {
    const inputs = ["", "5"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  })
});


