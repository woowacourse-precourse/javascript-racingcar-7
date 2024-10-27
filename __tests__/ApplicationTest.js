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
    ["", "자동차 이름을 입력해주세요!"],
    ["java,javascript", "각각의 자동차 이름은 5자 이하로 입력해주세요!"],
    ["java,,rust", "구분자를 연속 입력하였습니다!"],
    [",java,rust", "구분자는 자동차 이름 사이에 입력되어야 합니다!"],
    ["java,rust,", "구분자는 자동차 이름 사이에 입력되어야 합니다!"],
  ])("(%s)는 %s 에러를 반환한다.", async (inputCars, errorMessage) => {
    // given
    mockQuestions([inputCars]);


    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] " + errorMessage);
  });

  test.each([
    ["java,rust", "", '시도할 횟수를 입력해주세요!'],
    ["java,rust", "a", '시도할 횟수에는 숫자를 입력해야합니다!'],
    ["java,rust", "0", '시도할 횟수에는 양의 정수만 입력해주세요!'],
    ["java,rust", "-1", '시도할 횟수에는 양의 정수만 입력해주세요!'],
    ["java,rust", "1.1", '시도할 횟수에는 정수만 입력해주세요!'],
  ])("([%s],%s)는 %s 에러를 반환한다.", async (inputCars, inputCount, errorMessage) => {
    // given
    mockQuestions([inputCars,inputCount]);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] " + errorMessage);
  });

  test('우승자가 없는 경우 에러를 반환한다.', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "3"];

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP]);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR] 우승자가 없습니다!");
  });
});
