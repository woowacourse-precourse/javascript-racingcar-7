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

describe("자동차 경주 출력 테스트", () => {
  test("자동차의 이동 거리에 맞춰 대시(-)의 개수를 출력하는지 테스트", async () => {
    const inputs = ["car1,car2", "1"];
    const randomValues = [4, 3];
    const logSpy = jest.spyOn(MissionUtils.Console, "print").mockClear();

    mockQuestions(inputs);
    mockRandoms(randomValues);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car1 : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("car2 : "));
  });

  test("단독 우승자 안내 문구가 정상적으로 출력되는지 테스트", async () => {
    const inputs = ["car1,car2", "1"];
    const randomValues = [4, 3];
    const logSpy = jest.spyOn(MissionUtils.Console, "print").mockClear();

    mockQuestions(inputs);
    mockRandoms(randomValues);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : car1")
    );
  });

  test("공동 우승자 안내 문구가 정상적으로 출력되는지 테스트", async () => {
    const inputs = ["car1,car2", "1"];
    const randomValues = [4, 4];
    const logSpy = jest.spyOn(MissionUtils.Console, "print").mockClear();

    mockQuestions(inputs);
    mockRandoms(randomValues);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : car1, car2")
    );
  });
});
