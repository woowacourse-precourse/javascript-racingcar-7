import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { InputManager } from "../src/InputManager.js";
import { OutputManager } from "../src/OutputManager.js";
import { Random, Console } from "@woowacourse/mission-utils";
import { Race } from "../src/Race.js";
import { RANDOM_MIN, RANDOM_MAX } from "../src/constants.js";
import { Validator } from "../src/Validator.js";

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

// 추가 테스트

describe("InputManager 테스트", () => {
  test("자동차 이름을 올바르게 파싱해야 한다", () => {
    const input = "pobi,  woni,    jun      ";
    const result = InputManager.parseCarNames(input);
    expect(result).toEqual(["pobi", "woni", "jun"]);
  });

  test("시도 횟수를 올바르게 파싱해야 한다", () => {
    const input = "123";
    const result = InputManager.parseTries(input);
    expect(result).toBe(123);
  });
});

describe("OutputManager 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // 각 테스트 전에 목 초기화
  });

  test("경주 상태를 올바르게 출력해야 한다", () => {
    const cars = [
      { name: "pobi", position: 2 },
      { name: "woni", position: 3 },
    ];

    OutputManager.printRaceStatus(cars);

    // Console.print가 정확한 횟수만큼 호출되었는지 확인
    expect(Console.print).toHaveBeenCalledTimes(3);

    // 각각의 호출이 올바른 인자와 함께 이루어졌는지 확인
    expect(Console.print).toHaveBeenNthCalledWith(1, "\n실행 결과");
    expect(Console.print).toHaveBeenNthCalledWith(2, "pobi : --");
    expect(Console.print).toHaveBeenNthCalledWith(3, "woni : ---");
  });

  test("우승자를 올바르게 출력해야 한다", () => {
    const winners = ["pobi", "woni"];

    OutputManager.printWinners(winners);

    expect(Console.print).toHaveBeenCalledTimes(1);
    expect(Console.print).toHaveBeenCalledWith("\n최종 우승자 : pobi, woni");
  });

  test("단일 우승자를 올바르게 출력해야 한다", () => {
    const winners = ["pobi"];

    OutputManager.printWinners(winners);

    expect(Console.print).toHaveBeenCalledTimes(1);
    expect(Console.print).toHaveBeenCalledWith("\n최종 우승자 : pobi");
  });

  test("position이 0인 경우 대시가 출력되지 않아야 한다", () => {
    const cars = [{ name: "pobi", position: 0 }];

    OutputManager.printRaceStatus(cars);

    expect(Console.print).toHaveBeenCalledTimes(2);
    expect(Console.print).toHaveBeenNthCalledWith(1, "\n실행 결과");
    expect(Console.print).toHaveBeenNthCalledWith(2, "pobi : ");
  });
});

describe("Validator 테스트", () => {
  test("빈 문자열 검사", () => {
    expect(() => Validator.validateNotEmptyName("")).toThrow();
    expect(() => Validator.validateNotEmptyName("  ")).toThrow();
  });

  test("이름 길이 검사", () => {
    expect(() => Validator.validateNameLength("toolongname")).toThrow();
  });

  test("최소 자동차 대수 검사", () => {
    expect(() => Validator.validateCarCount(["car1"])).toThrow();
  });

  test("중복 이름 검사", () => {
    expect(() => Validator.validateUniqueCarNames(["pobi", "pobi"])).toThrow();
  });

  test("양의 정수 검사", () => {
    expect(() => Validator.validateTries("0")).toThrow();
    expect(() => Validator.validateTries("-1")).toThrow();
    expect(() => Validator.validateTries("abc")).toThrow();
  });
});

describe("Race 클래스 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("자동차들이 올바르게 생성되어야 한다", () => {
    const carNames = ["car1", "car2", "car3"];
    const race = new Race(carNames);

    expect(race.cars).toHaveLength(3);
    expect(race.cars[0].name).toBe("car1");
    expect(race.cars[1].name).toBe("car2");
    expect(race.cars[2].name).toBe("car3");
  });

  test("랜덤 숫자가 올바른 범위 내에서 생성되어야 한다", () => {
    const race = new Race(["car1"]);
    race.generateRandomNumber();

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(
      RANDOM_MIN,
      RANDOM_MAX
    );
  });

  test("자동차들이 랜덤값에 따라 이동해야 한다", () => {
    const race = new Race(["car1", "car2"]);
    Random.pickNumberInRange.mockReturnValueOnce(3).mockReturnValueOnce(4);

    race.moveCars();

    expect(race.cars[0].position).toBe(0); // 3는 전진 조건을 만족하지 않음
    expect(race.cars[1].position).toBe(1); // 4는 전진 조건을 만족
  });

  test("우승자를 올바르게 찾아야 한다", () => {
    const race = new Race(["car1", "car2", "car3"]);
    race.cars[0].position = 3;
    race.cars[1].position = 3;
    race.cars[2].position = 2;

    const winners = race.findWinners();

    expect(winners).toContain("car1");
    expect(winners).toContain("car2");
    expect(winners).not.toContain("car3");
    expect(winners).toHaveLength(2);
  });

  test("모든 자동차의 초기 위치는 0이어야 한다", () => {
    const race = new Race(["car1", "car2"]);

    race.cars.forEach((car) => {
      expect(car.position).toBe(0);
    });
  });

  test("동점자가 없는 경우 단일 우승자를 반환해야 한다", () => {
    const race = new Race(["car1", "car2", "car3"]);
    race.cars[0].position = 3;
    race.cars[1].position = 2;
    race.cars[2].position = 1;

    const winners = race.findWinners();

    expect(winners).toHaveLength(1);
    expect(winners[0]).toBe("car1");
  });
});
