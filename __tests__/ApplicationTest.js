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
});

describe("예외 테스트", () => {
  test("이름이 6자 이상인 경우", async () => {
    //given
    const inputs = ["car1,carcar2", "5"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("이름이 공백일 경우", async () => {
    //given
    const inputs = ["car1,,car3", "5"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 10개 이상일 경우", async () => {
    //given
    const inputs = ["car1,car2,car3,car4,car5,car6,car7,car8,car9,car10", "5"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 중복일 경우", async () => {
    //given
    const inputs = ["car1,car1", "5"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 공백일 경우", async () => {
    //given
    const inputs = ["car1, car2", ""];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 음수일 경우", async () => {
    //given
    const inputs = ["car1, car2", "-1"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 0일 경우", async () => {
    //given
    const inputs = ["car1, car2", "0"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 숫자가 아닐 경우", async () => {
    //given
    const inputs = ["car1, car2", "a"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 음수일 경우", async () => {
    //given
    const inputs = ["car1, car2", "-1"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수 입력이 소수일 경우", async () => {
    //given
    const inputs = ["car1, car2", "1.1"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
