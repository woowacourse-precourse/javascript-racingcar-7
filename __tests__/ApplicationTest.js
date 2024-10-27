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

  // 1. 자동차 이름 확인
  test("5자를 초과하는 이름이나 잘못된 입력에 대해 함수에서 오류가 발생한다.", () => {
    const app = new App();
    expect(() => app.validateCarNames(["pobi,javaji"])).toThrow("[ERROR] 자동차 이름은 최대 5자 이하이어야 합니다.");
  });

  test("유효한 자동차 이름", () => {
    const app = new App();
    expect(() => app.validateCarNames(["pobi", "woni"])).not.toThrow();
  });


  // 2. 이동 횟수 확인
  test("음수 또는 정수가 아닌 입력값은 함수에서 오류가 발생한다.", () => {
    const app = new App();
    expect(() => app.validateMoveCount("0")).toThrow("[ERROR] 시도 횟수는 1 이상의 정수여야 합니다.");
  });

  test("유효한 시도 횟수", () => {
    const app = new App();
    expect(() => app.validateMoveCount("3")).not.toThrow();
  });


  // 3. 자동차 초기화
  test("이름과 위치가 0으로 설정된 자동차를 초기화하는지 확인한다.", () => {
    const app = new App();
    const cars = app.initializeCars(["pobi", "woni"]);
    expect(cars).toEqual([{ name: "pobi", position: 0 }, { name: "woni", position: 0 }]);
  });


  // 4. 자동차 경기 시작
  test("라운드 실행하는 함수가 올바른 횟수만큼 호출되었는지 확인한다.", () => {
    const app = new App();
    const runRoundSpy = jest.spyOn(app, "runRound");
    app.startRace([{ name: "pobi", position: 0 }], 3);
    expect(runRoundSpy).toHaveBeenCalledTimes(3);
  });
});
