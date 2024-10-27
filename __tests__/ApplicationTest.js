import App from "../src/App.js";
import MissionUtils from "@woowacourse/mission-utils";

// MissionUtils 모듈을 Jest 모의(Mock) 처리
jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    readLine: jest.fn(),
    print: jest.fn(),
    close: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLine.mockImplementation((question, callback) => {
    const input = inputs.shift();
    callback(input); // 입력을 콜백에 전달
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange.mockImplementation(() => {
    return numbers.shift();
  });
};

const getLogSpy = () => {
  const logSpy = MissionUtils.Console.print;
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["1 차시:", "pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트", () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    expect(() => app.run()).toThrow("[ERROR] 입력값에 문제가 있습니다");
  });
});
