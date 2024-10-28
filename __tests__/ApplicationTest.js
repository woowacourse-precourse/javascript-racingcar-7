import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import ErrorMessages from "../src/constants/ErrorMessages.js";

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
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test("기능 테스트 1: 우승자가 1명인 경우", async () => {
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();

    await app.run();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("기능 테스트 2: 우승자가 여려명인 경우", async () => {
    const inputs = ["pobi,woni,jun", "2"];
    const logs = [
      "pobi : -",
      "woni : -",
      "jun : ",
      "pobi : --",
      "woni : --",
      "jun : -",
      "최종 우승자 : pobi, woni"
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();

    await app.run();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외 테스트 1: 자동차의 이름이 5글자 이하가 아닌 경우", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.CAR_NAME_LENGTH);
  });

  test("예외 테스트 2: 자동차의 이름이 한글, 영어, 숫자 외의 다른 문자로 이루어진 경우", async () => {
    const inputs = ["pobi,po-1,woni"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.CAR_NAME_FORMAT);
  });

  test("예외 테스트 3: 자동차의 이름이 중복되는 경우", async () => {
    const inputs = ["pobi,woni,pobi"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.CAR_NAME_DUPLICATE);
  });

  test("예외 테스트 4: 자동차의 수가 2대 이상 10대 이하가 아닌 경우", async () => {
    const inputs = ["aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk,lll,mmm"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.CAR_COUNT_INVALID);
  });

  test("예외 테스트 5: 시도할 횟수 입력이 숫자가 아닌 경우", async () => {
    const inputs = ["poni,woni", "abc"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.ROUND_NOT_NUMERIC);
  });

  test("예외 테스트 6: 시도할 횟수 입력이 정수가 아닌 경우", async () => {
    const inputs = ["poni,woni", "10.4"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.ROUND_NOT_INTEGER);
  });

  test("예외 테스트 7: 시도할 횟수가 1회 이상 50회 이하가 아닌 경우", async () => {
    const inputs = ["poni,woni", "70"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ErrorMessages.ROUND_OUT_OF_RANGE);
  });
});