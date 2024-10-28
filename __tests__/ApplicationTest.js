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
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트: 자동차 이름이 중복된 경우", async () => {
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 중복된 자동차 이름이 있습니다."
    );
  });

  test("예외 테스트: 자동차 이름에 공백만 입력된 경우", async () => {
    const inputs = ["pobi,  ,woni"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 공백으로 적을 수 없습니다."
    );
  });

  test("예외 테스트: 자동차 이름에 좌우 공백이 포함된 경우", async () => {
    const inputs = ["pobi, woni"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 좌우 공백 없이 적어주세요."
    );
  });

  test("예외 테스트: 자동차 이름이 5자를 초과한 경우", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하로 지어주세요."
    );
  });

  test("예외 테스트: 시도 횟수를 공백으로 적은 경우", async () => {
    const inputs = ["pobi,woni", "  "];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도할 횟수를 입력해 주세요."
    );
  });

  test("예외 테스트: 시도 횟수를 숫자로 적지 않은 경우", async () => {
    const inputs = ["pobi,woni", "x"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 올바른 값을 입력해 주세요."
    );
  });

  test("예외 테스트: 시도 횟수를 음수로 적은 경우", async () => {
    const inputs = ["pobi,woni", "-1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 횟수는 1 이상의 자연수로 입력해 주세요."
    );
  });

  test("예외 테스트: 시도 횟수를 0 으로 적은 경우", async () => {
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 횟수는 1 이상의 자연수로 입력해 주세요."
    );
  });

  test("예외 테스트: 시도 횟수를 정수로 적지 않은 경우", async () => {
    const inputs = ["pobi,woni", "3.45"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 횟수는 1 이상의 자연수로 입력해 주세요."
    );
  });
});
