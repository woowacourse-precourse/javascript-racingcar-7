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

  test("예외 테스트 : 자동차 이름 입력이 한개인 경우", async () => {
    // given
    const inputs = ["mer"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름을 두개 이상 입력해주세요"
    );
  });

  test("예외 테스트 : 자동차 이름이 5자를 초과한 경우", async () => {
    // given
    const inputs = ["pobium,mer,json"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하로 입력해주세요"
    );
  });

  test("예외 테스트 : 시도횟수에 숫자가 아닌 수가 입력된 경우", async () => {
    // given
    const inputs = ["pobi,mer,json", "a"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"
    );
  });

  test("예외 테스트 : 시도횟수에 음수가 입력된 경우", async () => {
    // given
    const inputs = ["pobi,mer,json", "-1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"
    );
  });

  test("예외 테스트 : 시도횟수에 소수가 입력된 경우", async () => {
    // given
    const inputs = ["pobi,mer,json", "2.2"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"
    );
  });
});
