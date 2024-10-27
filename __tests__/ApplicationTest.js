import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import Input from "../src/view/Input.js";
import Output from "../src/view/Output.js";
import RacingGame from "../src/model/RacingGame.js";

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
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  let app;
  beforeEach(() => {
    app = new App(Input, Output, new RacingGame());
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
    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("경주 게임이 있고 게임을 2번 반복하는 경우, 경주 게임의 차수별 출력 이전, '\n실행 결과'를 출력한다.", async () => {
    // given
    const inputs = ["ham,pobi", "2"];
    mockQuestions(inputs);
    mockRandoms([1, 4, 1, 4]);
    const logSpy = getLogSpy();

    // when
    await app.run();

    // then
    expect(logSpy).toHaveBeenCalledWith("\n실행 결과");
  });
});
