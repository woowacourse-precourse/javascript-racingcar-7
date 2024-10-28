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
    const inputs = ["소형차,중형차,대형차", "3"];
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

  test("모든 자동차가 득점하지 못한 경우", async () => {
    // given
    // const MOVING_FORWARD = 4;
    // const STOP = 3;
    const inputs = ["카카포,케아,코카투", "2"];
    const logs = [
      "카카포 : ",
      "케아 : ",
      "코카투 : ",
      "아무도 득점하지 못했습니다.",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([2, 3, 1, 1, 2, 3]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  // 자동차 이름 목록 입력 유효성 검증 테스트

  test("자동차 이름이 5자를 초과하는 경우", async () => {
    // given
    const inputs = ["파이썬,자바,자바스크립트"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("중복된 자동차 이름을 입력한 경우", async () => {
    // given
    const inputs = ["수학,대머리,대머리,빛"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  // 경주 횟수 입력 유효성 테스트

  test("경주 횟수가 숫자가 아닌 경우", async () => {
    // given
    const inputs = ["참치,김치,김밥", "#$"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("경주 횟수가 0 또는 음수인 경우", async () => {
    // given
    const inputs = ["지코바,자메이카,블랙마요", "0"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("경주 횟수가 정수가 아닌 양의 소수인 경우", async () => {
    // given
    const inputs = ["계란,달걀,EGG", "1.5"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
