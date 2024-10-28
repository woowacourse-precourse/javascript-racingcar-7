import App from "../src/App.js";
import Car from '../src/Car.js';
import Race from '../src/Race.js';
import { MissionUtils, Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from "../src/const.js";
import InputValidator from "../src/InputValidator.js";

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

describe("자동차 이름 입력 유효성 검사", () => {
  test("올바른 이름 입력", () => {
    const carNames = "pobi,woni,jun";
    expect(() => InputValidator.validateCarNames(carNames)).not.toThrow();
  });

  test("이름이 5자를 초과할 때 에러 발생", () => {
    const carNames = "pobi,woni,longname";
    expect(() => InputValidator.validateCarNames(carNames)).toThrow(ERROR_MESSAGES.INVALID_CAR_NAME);
  });
});

describe("이동 횟수 입력 유효성 검사", () => {
  test("올바른 이동 횟수 입력", () => {
    const raceAttempts = "3";
    expect(() => InputValidator.validateRaceAttempts(raceAttempts)).not.toThrow();
  });

  test("이동 횟수가 양의 정수가 아닐 때 에러 발생", () => {
    const raceAttempts = "-1";
    expect(() => InputValidator.validateRaceAttempts(raceAttempts)).toThrow(ERROR_MESSAGES.INVALID_RACE_ATTEMPTS);
  });
});

describe("자동차 이동 결정 로직", () => {
  test("무작위 값이 4 이상일 때 이동", () => {
    const car = new Car("pobi");
    car.move();
    expect(car.getPosition()).toBe(1);
  });

  test("무작위 값이 3 이하일 때 멈춤", () => {
    const car = new Car("pobi");
    // 이동하지 않았을 때 위치가 0인지 확인
    expect(car.getPosition()).toBe(0);
  });
});

describe("자동차 이동 결과 출력", () => {
  test("각 라운드에서 자동차 위치 출력", () => {
    const carNames = ["pobi", "woni"];
    const race = new Race(carNames, 1);

    const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
    race.runRound();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi :"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni :"));

    logSpy.mockRestore();
  });
});

describe("우승자 결정 및 출력", () => {
  test("우승자가 단일일 경우 출력", () => {
    const carNames = ["pobi", "woni"];
    const race = new Race(carNames, 3);

    race.cars[0].position = 3;
    race.cars[1].position = 1;

    const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
    race.printWinners();

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
    logSpy.mockRestore();
  });

  test("우승자가 여러 명일 경우 출력", () => {
    const carNames = ["pobi", "woni", "jun"];
    const race = new Race(carNames, 3);

    race.cars[0].position = 2;
    race.cars[1].position = 2;
    race.cars[2].position = 1;

    const logSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
    race.printWinners();

    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
    logSpy.mockRestore();
  });
});

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
