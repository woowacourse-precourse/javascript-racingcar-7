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

describe("Car Racing Game", () => {
  let app;
  beforeEach(() => {
    app = new App();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should throw an error if no car names are provided", async () => {
    mockQuestions([""]);
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 1개 이상이어야 합니다."
    );
  });

  test("should throw an error if any car name exceeds 5 characters", async () => {
    mockQuestions(["Ferrari, Lamborghini"]);
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름을 5자 이하로 작성해주세요."
    );
  });

  test("should throw an error if try number is less than 1", async () => {
    mockQuestions(["car1, car2", "0"]);
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다."
    );
  });

  test("should print car progress correctly for valid inputs", async () => {
    const inputs = ["car1, car2", "3"];
    const logs = [
      "실행 결과",
      "car1 : -",
      "car2 : ",
      "",
      "car1 : --",
      "car2 : -",
      "",
      "car1 : --",
      "car2 : --",
      "",
      "최종 우승자 : car1, car2",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 3, 5, 4, 2, 4]);

    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("should determine the correct winner", async () => {
    const inputs = ["carA, carB, carC", "2"];
    const logs = ["최종 우승자 : carA"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([4, 4, 3, 5, 2, 4]);

    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
