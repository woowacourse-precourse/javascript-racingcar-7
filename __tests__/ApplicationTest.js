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

  test.each([
    //given
    [["!pobi,Woni", "3"], "이름에 영문자, 쉼표 이외의 다른 문자를 입력"],
    [["pobi, woni", "3"], "이름에 공백 문자 포함"],
    [["pobi, javaji", "3"], "이름이 6글자 이상"],
    [["pobi,woni,", "3"], "이름 입력이 쉼표로 종료"],
    [["pobi,pobi,woni", "3"], "이름 중복"],
    [["pobi,woni", "A"], "시도 횟수에 수가 아닌 다른 문자 입력"],
    [["pobi,woni", "0"], "시도 횟수에 0 입력"],
    [["pobi,woni", "-3"], "시도 횟수에 음수 입력"]
  ])("%s 예외 테스트 - %s", async (inputs, description) => {
    mockQuestions([...inputs]);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
