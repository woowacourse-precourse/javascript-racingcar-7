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

  // 예외 처리 테스트
  test("자동차 이름 입력 예외 테스트", async () => {
    const inputs = ["pobi,javaji"]; // 자동차 이름 중 하나가 5자 초과인 경우
    mockQuestions(inputs);

    const app = new App();

    // 예외가 제대로 발생했는지 확인
    await expect(app.run()).rejects.toThrow("[ERROR] 자동차 이름은 1자 이상 5자 이하로 입력해주세요.");
  });

  test("경주 횟수 입력 예외 테스트", async () => {
    const inputs = ["pobi,woni", "-1"]; // 잘못된 경주 횟수 입력
    mockQuestions(inputs);

    const app = new App();

    // 예외가 제대로 발생했는지 확인
    await expect(app.run()).rejects.toThrow("[ERROR] 횟수는 1 이상의 숫자로 입력해주세요.");
  });
});
