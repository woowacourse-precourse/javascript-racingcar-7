import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { Validator } from "../src/utils/Validator.js";

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
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  test("정상적인 자동차 이름과 시도 횟수 입력", async () => {
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

  test("자동차 이름이 비어 있는 경우 예외 테스트", async () => {
    const inputs = ["", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름에는 빈 문자열이 포함될 수 없습니다."
    );
  });

  test("특수 문자 포함된 자동차 이름 예외 테스트", async () => {
    const inputs = ["po@bi,woni", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 알파벳과 숫자만 포함할 수 있습니다."
    );
  });

  test("자동차 이름 중 빈 문자열 포함 예외 테스트", async () => {
    const inputs = ["pobi,,woni", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름에는 빈 문자열이 포함될 수 없습니다."
    );
  });

  test("자동차 이름이 5자를 초과하는 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni,javajava", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하로 입력해야 합니다."
    );
  });

  test("자동차 이름에 중복된 이름이 있는 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni,pobi", "1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 중복될 수 없습니다."
    );
  });

  test("시도 횟수가 비어 있는 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni", ""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력해주세요."
    );
  });

  test("시도 횟수가 숫자가 아닌 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni", "a"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 숫자로 입력해야 합니다."
    );
  });

  test("시도 횟수가 음수인 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni", "-1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 양수여야 합니다."
    );
  });

  test("시도 횟수가 소수인 경우 예외 테스트", async () => {
    const inputs = ["pobi,woni", "2.5"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 정수로 입력해야 합니다."
    );
  });
});
