import App from "../src/App.js";
import Car from "../src/Car.js";
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

describe("Car 클래스", () => {
  test("Car 객체 생성 이름과 위치 초기화", () => {
    const car = new Car("dawon");

    expect(car.name).toBe("dawon");
    expect(car.position).toBe(0);
  });
});

describe("자동차 이름 문자열 입력", () => {
  test("문장이 구분자로 끝날 수 없음", () =>{
    const INPUT = "kia,hyun,gene,";
    const app = new App();

    expect(() => app.validateCarNames(INPUT).toThrow("[ERROR] 문장 양식이 구분자로 끝날 수 없습니다!"));
  });

  test("문장이 구분자로 시작할 수 없음", () =>{
    const INPUT = ",kia,hyun,gene";
    const app = new App();

    expect(() => app.validateCarNames(INPUT).toThrow("[ERROR] 문장 양식이 구분자로 시작할 수 없습니다!"));
  });
});

describe("자동차 이름 문자열 분리", () => {
  test("자동차 이름 반환", () => {
    const CAR_NAMES = "hyun,kia,gene";

    const app = new App();
    const result = app.splitName(CAR_NAMES);

    expect(result).toEqual(["hyun","kia","gene"]);
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
