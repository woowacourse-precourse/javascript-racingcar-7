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
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("입력이 없는 경우", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.getNames()).rejects.toThrow("[ERROR]");
  });

  test("잘못된 경주 횟수 입력", async () => {
    const inputs = ["car1,car2", "abc"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.getRounds()).rejects.toThrow("[ERROR]");
  });

  test("중복된 자동차 이름", async () => {
    const inputs = ["car1,car1", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 5자를 초과", async () => {
    const inputs = ["racingcar", "1"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("매 경주마다 이름과 전진 거리 출력", async () => {
    const inputs = ["car1,car2", "3"];
    const randoms = [4, 3, 5, 6, 2, 7];
    const expectedLogs = [
      "car1 : -",
      "car2 : ",
      "car1 : --",
      "car2 : -",
      "car1 : --",
      "car2 : --",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("우승자 결정", async () => {
    const inputs = ["car1,car2", "1"];
    const randoms = [4, 4];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : car1, car2");
  });

  test("기능이 정상 작동", async () => {
    const inputs = ["car1,car2,car3", "2"];
    const randoms = [5, 3, 4, 2, 9, 5];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 :")
    );
  });
});
