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

  test("예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  
  test("자동차 이름에 공백이 포함된 경우", async () => {
    const inputs = ["pobi, ,woni"];
    mockQuestions(inputs);
  
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 이름에 공백이 포함될 수 없습니다.");
  });
  
  test("자동차 이름이 5자 이상인 경우", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);
  
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 이름은 5자 이하여야 합니다.");
  });
  
  test("자동차 이름이 중복된 경우", async () => {
    const inputs = ["pobi,woni,pobi"];
    mockQuestions(inputs);
  
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 중복된 이름이 존재합니다.");
  });
  
  test("이동 횟수가 숫자가 아닌 경우", async () => {
    const inputs = ["pobi,woni", "abc"];
    mockQuestions(inputs);
  
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR] 시도 횟수는 숫자여야 합니다.");
  });
  
  test("이동 횟수가 0 이하인 경우", async () => {
    const inputsZero = ["pobi,woni", "0"];
    const inputsNegative = ["pobi,woni", "-1"];
    
    mockQuestions(inputsZero);
    const app1 = new App();
    await expect(app1.run()).rejects.toThrow("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해야 합니다.");
  
    mockQuestions(inputsNegative);
    const app2 = new App();
    await expect(app2.run()).rejects.toThrow("[ERROR] 시도 횟수는 1 이상의 숫자로 입력해야 합니다.");
  });
});
