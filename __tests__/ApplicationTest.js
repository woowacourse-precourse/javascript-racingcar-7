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
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("자동차 이름을 쉼표로 구분하여 객체 배열로 변환", () => {
    // given
    const app = new App();
    const carNames = "pobi,   crong,카 ,기차";

    // when
    const result = app.parseCarNames(carNames);

    // then
    expect(result).toEqual([
      { name: "pobi", result: "" },
      { name: "crong", result: "" },
      { name: "카", result: "" },
      { name: "기차", result: "" },
    ]);
  });

  test("기능 테스트: randomNumber가 4 이상일 때 자동차의 결과에 '-' 추가", () => {
    // given
    const app = new App();
    const car = { name: "pobi", result: "" };

    // 랜덤 숫자를 모의로 설정 (4 이상으로 설정하여 자동차가 이동하도록)
    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(5);

    // when
    app.moveCar(car);

    // then
    expect(car.result).toBe("-");
  });

  test("기능 테스트: 자동차가 정해진 시도 횟수만큼 이동하는지 확인", async () => {
    // Arrange
    const app = new App();
    const mockCars = [
      { name: "pobi", result: "" },
      { name: "crong", result: "" },
    ];
    const mockAttempts = 3;

    // Mock 함수 설정
    app.getCarNameAndAttempts = jest.fn().mockResolvedValue({
      cars: mockCars,
      attempts: mockAttempts,
    });
    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(5);

    // Act
    await app.run();

    // Assert
    mockCars.forEach((car) => {
      expect(car.result).toBe("---");
    });
  });

  test("run 함수가 자동차 경주 결과를 올바르게 출력하는지 확인", async () => {
    // Arrange
    const app = new App();
    const mockCars = [
      { name: "pobi", result: "" },
      { name: "crong", result: "" },
    ];
    const mockAttempts = 2;

    // getCarNameAndAttempts를 모의로 설정하여 자동차 목록과 시도 횟수를 반환하도록 설정
    app.getCarNameAndAttempts = jest
      .fn()
      .mockResolvedValue({ cars: mockCars, attempts: mockAttempts });

    // Random.pickNumberInRange를 모의로 설정 (항상 5를 반환하여 자동차가 항상 이동하도록)
    MissionUtils.Random.pickNumberInRange = jest.fn().mockReturnValue(5);

    // Console.print를 모의로 설정
    const consoleSpy = jest.spyOn(MissionUtils.Console, "print");

    // Act
    await app.run();

    // Assert
    expect(consoleSpy).toHaveBeenCalledWith("실행 결과");
    expect(consoleSpy).toHaveBeenCalledWith("pobi : -");
    expect(consoleSpy).toHaveBeenCalledWith("crong : -");
    expect(consoleSpy).toHaveBeenCalledWith("pobi : --");
    expect(consoleSpy).toHaveBeenCalledWith("crong : --");
    expect(consoleSpy).toHaveBeenCalledWith("\n");
  });

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

  test("예외 테스트: 자동차 이름이 5글자가 넘을 경우", async () => {
    // given
    const inputs = ["pod,abcdefg", "1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트: 자동차 이름이 비어 있는 경우", async () => {
    // given
    const inputs = ["", "1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("예외 테스트: 띄어쓰기를 입력했을 경우", async () => {
    // given
    const inputs = ["   ", "1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("예외 테스트: 횟수에 문자를 입력했을 경우", async () => {
    // given
    const inputs = ["sdf", "a"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("예외 테스트: 횟수가 비어있을 경우", async () => {
    // given
    const inputs = ["sdf", "  "];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("예외 테스트: 횟수에 음수를 입력했을 경우", async () => {
    // given
    const inputs = ["sdf", "-1"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
