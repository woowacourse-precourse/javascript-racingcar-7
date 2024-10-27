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
});

describe("자동차 경주 - 입력 검증", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  // 자동차 이름 검증 - 파라미터화 테스트 적용
  describe.each([
    { description: "자동차 이름이 하나도 입력되지 않았을 때", input: [], error: "[ERROR] 자동차 이름을 하나 이상 입력해야 합니다." },
    { description: "자동차 이름이 공백일 때", input: [""], error: "[ERROR] 자동차 이름은 공백일 수 없습니다." },
    { description: "자동차 이름이 5자를 초과할 때", input: ["pobi", "javaji"], error: "[ERROR] 자동차 이름은 5자 이하만 가능합니다." },
  ])("자동차 이름 검증", ({ description, input, error }) => {
    test(description, () => {
      expect(() => app.validateCarNames(input)).toThrow(error);
    });
  });

  // 유효한 자동차 이름 입력 테스트
  test("유효한 자동차 이름이 입력된 경우 오류가 발생하지 않음", () => {
    expect(() => app.validateCarNames(["pobi", "woni"])).not.toThrow();
  });

  // 시도 횟수 검증 - 파라미터화 테스트 적용
  describe.each([
    { description: "정수가 아닌 값이 입력될 때", input: "abc", error: "[ERROR] 시도할 횟수는 정수여야 하며, 숫자만 입력해야 합니다." },
    { description: "공백이 입력될 때", input: " ", error: "[ERROR] 시도할 횟수는 정수여야 하며, 숫자만 입력해야 합니다." },
    { description: "소수 입력 시", input: "1.5", error: "[ERROR] 시도할 횟수는 정수여야 하며, 숫자만 입력해야 합니다." },
    { description: "시도 횟수가 0일 때", input: "0", error: "[ERROR] 시도할 횟수는 1이상의 숫자여야 합니다." },
    { description: "시도 횟수가 음수일 때", input: "-1", error: "[ERROR] 시도할 횟수는 1이상의 숫자여야 합니다." },
  ])("시도 횟수 검증", ({ description, input, error }) => {
    test(description, () => {
      expect(() => app.validateTrialCount(input)).toThrow(error);
    });
  });

  // 유효한 시도 횟수 입력 테스트
  test("유효한 시도 횟수가 입력된 경우 오류가 발생하지 않음", () => {
    expect(() => app.validateTrialCount("3")).not.toThrow();
  });
});
