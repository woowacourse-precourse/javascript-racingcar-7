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
  test("기본 입력", async () => {
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

  test("공동 우승자", async () => {
    // given
    const MOVING_FORWARD = 4; // 자동차가 앞으로 나아갈 때의 랜덤 값
    const inputs = ["pobi,woni", "1"]; // 자동차 이름과 시도 횟수
    const logs = ["pobi : -", "woni : -", "최종 우승자 : pobi, woni"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD]); // 각 라운드의 랜덤 값 설정

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("잘못된 자동차 이름 - 5자 이상 입력", async () => {
    mockQuestions(["fiveupper, four"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자 이하만 가능합니다."
    );
  });

  test("중복된 자동차 이름", async () => {
    mockQuestions(["pobi, woni, woni"]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 서로 다른 이름으로 자동차의 이름들을 지정하세요."
    );
  });

  test("자동차 이름 입력 안함", async () => {
    mockQuestions([""]);
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 경주할 자동차 이름을 입력하세요."
    );
  });

  test("잘못된 구분자 입력 - 쉼표 외의 다른 구분자", async () => {
    const invalidSeparators = [
      ";",
      "/",
      " ",
      ":",
      "`",
      "#",
      "@",
      "!",
      "^",
      "&",
    ];

    const promises = invalidSeparators.map(async (separator) => {
      mockQuestions([`pobi${separator}woni`]);
      const app = new App();
      await expect(app.run()).rejects.toThrow(
        new Error("[ERROR] 각 자동차를 구분하는 구분자는 쉼표(,)만 가능합니다.")
      );
    });

    await Promise.all(promises);
  });

  test("잘못된 시도 횟수 - 숫자 입력 안함", async () => {
    mockQuestions(["pobi,woni", ""]); // 자동차 이름과 빈 입력
    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수를 입력해주세요."
    );
  });

  test("잘못된 시도횟수 - 양의 정수 외에 다른 입력값", async () => {
    const invalidRounds = ["abc", "-1", "0", "3.5", "five"];

    const promises = invalidRounds.map(async (input) => {
      mockQuestions(["pobi,woni", input]);
      const app = new App();
      await expect(app.run()).rejects.toThrow(
        new Error("[ERROR] 양의 정수로 된 시도횟수를 입력하세요.")
      );
    });

    await Promise.all(promises);
  });
});
