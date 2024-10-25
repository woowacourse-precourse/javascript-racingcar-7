import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import carNameInput from "../src/UI/carNameInput.js";
import trialCountInput from "../src/UI/trialCountInput.js";
import createRacerInformation from "../src/racerData/racer.js";
import goStopResult from "../src/feature/goStopResult.js";

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

  test("기능 단위 테스트: carNameInput()", async () => {
    // given
    const input = ['aaaa,bbbb,cccc,dddd'];
    mockQuestions(input);

    // when
    const carList = await carNameInput();

    // then
    expect(carList).toContain('aaaa' && 'bbbb' && 'cccc' && 'dddd');
  });

  test.each([
    ['4', 4],
    ['123', 123],
    ['1', 1],
    ['10', 10],
  ])("기능 단위 테스트: trialCountInput() { input: %s, result: %s }",
    async (input, result) => {
      // given
      const userInput = [input];
      mockQuestions(userInput);

      // when
      const trialCount = await trialCountInput();

      // then
      expect(trialCount).toBe(result);
    }
  )

  test.each([
    ['사', '입력하신 값이 숫자가 아닙니다.'],
    ['0', '입력하신 값이 1보다 작아서 레이스를 진행 할 수 없습니다.'],
    ['1.1', '입력하신 값이 정수가 아닙니다.'],
  ])("기능 단위 예외 테스트: trialCountInput() { input: %s , result: %s }",
    async (input, result) => {
      // given
      const userInput = [input];
      mockQuestions(userInput);

      // when


      // then
      await expect(trialCountInput()).rejects.toThrow(`${result}`);
  });

  test('기능 단위 테스트: createRacerInformation', () => {
    // given
    const carList = ['one', 'two', 'three'];

    // when
    const initialRaceInfomation = createRacerInformation(carList);

    // then
    expect(initialRaceInfomation).toContainEqual(['one', ''] && ['two', ''] && ['three', '']);
  });

  test('기능 단위 테스트: goStopResult()', () => {
    // given
    const go = 4;
    const expectedResult = '-';

    mockRandoms([go]);

    // when
    const fnResult = goStopResult();
    
    // then
    expect(fnResult).toBe(expectedResult);
  });
});