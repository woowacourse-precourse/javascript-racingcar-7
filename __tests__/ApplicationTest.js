// __tests__/ApplicationTest.js
import App from "../src/App.js";
import { Console, Random } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();

  numbers.forEach((number) => {
    Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = [
      "참가자 명단: pobi, woni",
      "pobi : -",
      "woni : ",
      "최종 우승자 : pobi"
    ];
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

  test("예외 테스트 - 자동차 이름이 5자를 초과", async () => {
    // given
    const inputs = ["pobi,javaji", "1"]; // 'javaji'는 6자
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 이름은 5자를 초과할 수 없습니다.");
  });

  test("예외 테스트 - 시도 횟수가 0", async () => {
    // given
    const inputs = ["pobi,woni", "0"]; // 시도 횟수가 0
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
  });

  test("예외 테스트 - 시도 횟수가 숫자가 아님", async () => {
    // given
    const inputs = ["pobi,woni", "abc"]; // 시도 횟수가 숫자가 아님
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 양의 정수여야 합니다.");
  });

  test("예외 테스트 - 자동차 이름이 비어있음", async () => {
    // given
    const inputs = ["", "1"]; // 자동차 이름이 비어있음
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 최소 하나의 이름이 필요합니다.");
  });
});
