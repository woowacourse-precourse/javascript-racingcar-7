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
    await expect(app.run()).resolves.not.toThrow();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});

describe("1. 자동차 이름 확인", () => {
  test("5자를 초과하는 이름이나 잘못된 입력에 대해 함수에서 오류가 발생한다.", async () => {
    const app = new App();
    await expect(() => app.validateCarNames(["pobi,javaji"])).rejects.toThrow("[ERROR]");
  });

  test("유효한 자동차 이름을 확인한다.", () => {
    const app = new App();
    expect(() => app.validateCarNames(["pobi", "woni"])).not.toThrow();
  });
});

describe("2. 이동 횟수 확인", () => {
  test("음수 또는 정수가 아닌 입력값은 함수에서 오류가 발생한다.", async () => {
    const app = new App();
    await expect(() => app.validateMoveCount("0")).rejects.toThrow("[ERROR]");
  });

  test("유효한 시도 횟수를 확인한다.", () => {
    const app = new App();
    expect(() => app.validateMoveCount("3")).not.toThrow();
  });
});

describe("3. 자동차 초기화", () => {
  test("이름과 위치가 0으로 설정된 자동차를 초기화하는지 확인한다.", () => {
    const app = new App();
    const cars = app.initializeCars(["pobi", "woni"]);
    expect(cars).toEqual([
      { name: "pobi", position: 0 },
      { name: "woni", position: 0 },
    ]);
  });
});

describe("4. 자동차 경기 시작", () => {
  test("라운드 실행하는 함수가 올바른 횟수만큼 호출되었는지 확인한다.", () => {
    const app = new App();
    const runRoundSpy = jest.spyOn(app, "runRound");
    app.startRace([{ name: "pobi", position: 0 }], 3);
    expect(runRoundSpy).toHaveBeenCalledTimes(3);
  });
});

describe("5. 단일 라운드 실행", () => {
  test("단일 라운드에서 자동차가 예상대로 움직이거나 멈추는지 확인한다.", () => {
    const app = new App();
    const moveCarSpy = jest.spyOn(app, "moveCar");
    const cars = [
      { name: "pobi", position: 0 },
      { name: "woni", position: 0 },
    ];
    app.runRound(cars);
    expect(moveCarSpy).toHaveBeenCalledTimes(cars.length);
  });
});

describe("6. 자동차 이동 시물레이션", () => {
  test("자동차 움직임을 검증하기 위해 무작위 기능을 확인한다.", () => {
    const app = new App();
    const car = { name: "pobi", position: 0 };
    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(4);
    app.moveCar(car);
    expect(car.position).toBe(1);
  });

  test("무작위 값이 4보다 작으면 자동차를 움직이지 않는다.", () => {
    const app = new App();
    const car = { name: "pobi", position: 0 };
    jest.spyOn(MissionUtils.Random, "pickNumberInRange").mockReturnValue(3);
    app.moveCar(car);
    expect(car.position).toBe(0);
  });
});

describe("7. 시뮬레이션 실행 결과", () => {
  test("자동차 이동 시뮬레이션 출력 결과가 올바른 형식인지 확인한다.", () => {
    const app = new App();
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    const cars = [
      { name: "pobi", position: 1 },
      { name: "woni", position: 0 },
    ];
    app.printRoundResults(cars);
    expect(logSpy).toHaveBeenCalledWith("pobi : -");
    expect(logSpy).toHaveBeenCalledWith("woni : ");
  });
});

describe("8. 우승자 발표", () => {
  test("우승자가 있을 때 올바른 우승자가 발표되는지 확인한다.", () => {
    const app = new App();
    const cars = [
      { name: "pobi", position: 2 },
      { name: "woni", position: 1 },
    ];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    app.getWinners(cars);
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  test("동점일 경우 여러 명의 당첨자를 발표되는지 확인한다.", () => {
    const app = new App();
    const cars = [
      { name: "pobi", position: 2 },
      { name: "woni", position: 2 },
    ];
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    app.getWinners(cars);
    expect(logSpy).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });
});
