import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR_MESSAGES } from '../src/constant/error.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const MOVING_FORWARD = 4;
const STOP = 3;

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
  })
  test("기능 테스트2", async () => {
    const inputs = ["pobi,juni,wooa", "3"];
    const logs = ["pobi : -", "juni : ", "wooa : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs)
    mockRandoms([MOVING_FORWARD, STOP, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })
  })
  test("공동 우승자 테스트", async () => {
    const inputs = ["pobi,juni,wooa", "1"];
    const logs = ["pobi : -", "juni : -", "wooa : -", "최종 우승자 : pobi, juni, wooa"];
    const logSpy = getLogSpy();

    mockQuestions(inputs)
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })
  })
  test("자동차 이름 경계값 테스트", async () => {
    const inputs = ["pobii,junii,woowa", "1"];
    const logs = ["pobii : -", "junii : -", "woowa : -", "최종 우승자 : pobii, junii, woowa"];
    const logSpy = getLogSpy();

    mockQuestions(inputs)
    mockRandoms([MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    })
  })
})

describe("예외 테스트 - 자동차 이름 오류 테스트", () => {
  test("자동차의 이름이 5자를 넘어가는 경우", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.LENGTH_OVER_CAR_NAME);
  });
  test("자동차의 이름이 공백인 경우", async () => {
    const inputs = ["pobi, ,jun"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.EMPTY_CAR_NAME);
  });
  test("자동차의 이름이 중복되는 경우", async () => {
    const inputs = ["pobi,pobi,woni"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  })
})

describe("예외 테스트 - 시도 횟수 오류 테스트", () => {
  test("시도 횟수가 공백인 경우", async () => {
    const inputs = ["pobi,jun,woni", ""];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.EMPTY_ATTEMPTS);
  });
  test("시도 횟수가 음수인 경우", async () => {
    const inputs = ["pobi,jun,woni", "-1"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NEGATIVE_ATTEMPTS);
  });
  test("시도 횟수가 0인 경우", async () => {
    const inputs = ["pobi,jun,woni", "0"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.ZERO_ATTEMPTS);
  })
  test("시도 횟수가 숫자가 아닌 경우", async () => {
    const inputs = ["pobi,jun,woni", "a"];
    mockQuestions(inputs)
    const app = new App();

    await expect(app.run()).rejects.toThrow(ERROR_MESSAGES.NAN_ATTEMPTS);
  })
})

