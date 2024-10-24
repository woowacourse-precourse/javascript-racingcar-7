import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { inputCarNames, inputPlayTime } from "../src/utils/customInput.js";
import splitNames from "../src/utils/splitInput.js";

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

  test('자동차 이름 입력 받기', async () => {
    // given
    const inputs = ["pobi,woni"];
    mockQuestions(inputs);

    // when
    const receivedInput = await inputCarNames();

    // then
    expect(receivedInput).toEqual('pobi,woni');
  });

  test('입력 받은 문자열 분리하기', () => {
    // given
    const input = "pobi,woni";
    const expectedOutput = ["pobi", "woni"];

    // when
    const receivedInput = splitNames(input);

    // then
    expect(receivedInput).toEqual(expectedOutput);
  });

  test('각각의 이름의 길이가 5글자 이하 테스트', async () => {
    // given
    const input = ["pobi,woowahanwoni"];
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]: 이름의 길이는 5글자 이내로 입력해주세요.");
  })

  test('이동할 횟수 입력', async () => {
    // given
    const attemptCount = ["5"];
    mockQuestions(attemptCount);
  
    // when
    const receivedInput = await inputPlayTime();
  
    // then
    expect(receivedInput).toEqual(5);
  });

});
