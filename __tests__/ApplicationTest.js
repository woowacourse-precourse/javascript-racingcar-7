import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import carNameInput from "../src/UI/carNameInput.js";
import trialCountInput from "../src/UI/trialCountInput.js";
import createRacerInformation from "../src/racerData/createRacerInformation.js";
import goStopResult from "../src/feature/goStopResult.js";
import raceProgression from "../src/feature/raceProgression.js";
import getWinner from "../src/feature/getWinner.js";

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
    [',,aaaa', '자동차 이름이 설정되지 않았습니다.'],
    ['aaaaa,bbbb,ccccccc', '자동차 이름이 5글자를 초과 합니다.'],
    ['aaa,aaa,bbb,bbb,c', '중복된 자동차 이름이 존재 합니다.']
  ])('기능 단위 예외 테스트: carNameInput() { input: %s, result: %s }',
    async (input, result) => {
      // given
      const userInput = [input];

      mockQuestions(userInput);
      // when

      // then
      await expect(carNameInput()).rejects.toThrow(result);
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

  test.each([
    [4, '-'],
    [5, '-'],
    [0, ''],
    [3, '']
  ])('기능 단위 테스트: goStopResult() { randomNumber: %s, result: %s }',
    (randomNumer, result) => {
      // given
      mockRandoms([randomNumer]);

      // when
      const fnResult = goStopResult();

      // then
      expect(fnResult).toBe(result);
    });

  test('기능 단위 테스트: raceProgression()', () => {
    // given
    const carList = ['carA', 'carB', 'carC', 'carD', 'carE', 'carF'];
    const initialRaceHistory = new Map(carList.map((car) => [car, '']));
    const trialCount = 1;
    const randomNumber = [9, 0, 0, 0, 0, 0];
    const logs = ["carA : -", "carB : ", "carC : ", "carD : ", "carE : ", "carF : "];
    const logSpy = getLogSpy();

    mockRandoms(randomNumber);

    // when
    const raceResult = raceProgression(carList, initialRaceHistory, trialCount);

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
    expect(raceResult).toContainEqual(['carA', '-'] && ['carB', ''] && ['carC', ''] && ['carD', ''] && ['carE', ''] && ['carF', '']);
  });

  test('기능 단위 테스트: getWinner()', () => {
    // given
    const carList = ['carA', 'carB', 'carC', 'carD', 'carE', 'carF'];
    const raceProgress = new Map([
      ['carA', ''],
      ['carB', '--'],
      ['carC', '----------'],
      ['carD', '---'],
      ['carE', '-'],
      ['carF', '----------'],
    ]);
    const logs = ['최종 우승자 : carC, carF'];
    const logSpy = getLogSpy();

    // when
    getWinner(carList, raceProgress);

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});