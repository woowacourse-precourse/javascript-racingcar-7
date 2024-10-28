import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "../src/Validation.js";
import { ERROR_MESSAGE } from "../src/constant.js";
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
});
describe("error 추가 테스트", () => {
  test("이름의 길이가 6글자 이상일 경우 에러", () => {
    const carNames = ["minsuk","pobi"];
    expect(() => Validation.checkCarName(carNames)).toThrow(ERROR_MESSAGE.OVER_LENGTH);
  });
  test("자동차가 2대 미만일 경우 에러", () => {
    const carNames = ["minsuk"];
    expect(() => Validation.checkCarName(carNames)).toThrow(ERROR_MESSAGE.DEFICIENCY);
  });
  test("자동차 이름이 중복될 경우", () => {
    const carNames = ["minsuk","minsuk"];
    expect(() => Validation.checkCarName(carNames)).toThrow(ERROR_MESSAGE.DUPLICATION);
  });
  test("자동차 이름을 입력 안한경우", () => {
    const carNames = [""];
    expect(() => Validation.checkCarName(carNames)).toThrow(ERROR_MESSAGE.NOTHING);
  });
  test("자동차 이름을 입력 안하고 쉼표를 넣은 경우", () => {
    const carNames = ["","minsuk"];
    expect(() => Validation.checkCarName(carNames)).toThrow(ERROR_MESSAGE.EMPTY);
  });

  test("횟수 입력시 숫자가 아닐 경우", () => {
    const count = "a";
    expect(() => Validation.checkMoveCount(count)).toThrow(ERROR_MESSAGE.NOT_NUMBER);
  });
  test("횟수 입력시 정수가 아닐 경우", () => {
    const count = 1.5;
    expect(() => Validation.checkMoveCount(count)).toThrow(ERROR_MESSAGE.NOT_INTEGER);
  });
  test("횟수 입력시 1 이하의 숫자를 입력하였을 때", () => {
    const count = 0;
    expect(() => Validation.checkMoveCount(count)).toThrow(ERROR_MESSAGE.SMALL_NUMBER);
  });
 
  

});
