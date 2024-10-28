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

  // 1. 에외 테스트 : 쉼표가 아닌 다른 구분자로 입력이 된 경우
  test("예외 테스트 : 쉼표가 아닌 다른 구분자로 입력이 된 경우",async()=>{
    const inputs=["flee:pobi"];
    mockQuestions(inputs);
  
    const app = new App();
  
    await expect(app.run()).rejects.toThrow("[ERROR]");
  })
  
  // 2. 예외 테스트 : 시도할 횟수(라운드)에 정수가 아닌 문자열이 입력된 경우
  test("예외 테스트 : 시도할 횟수(라운드)에 정수가 아닌 문자열이 입력된 경우",async()=>{
    const inputs=["flee,pobi","많이"];
    mockQuestions(inputs);
  
    const app = new App();
  
    await expect(app.run()).rejects.toThrow("[ERROR]")
  })
  
  // 3. 예외 테스트 : 시도할 횟수(라운드)에 0이 입력된 경우
  test("예외 테스트 : 시도할 횟수(라운드)에 0이 입력된 경우",async()=>{
    const inputs=["flee,pobi","0"];
    mockQuestions(inputs);
  
    const app = new App();
  
    await expect(app.run()).rejects.toThrow("[ERROR]");
  })
  
  // 4. 예외 테스트 : 자동차 입력 시 쉼표(,) 앞에 공백만 존재할 때
  test("예외 테스트 : 자동차 입력 시 쉼표(,) 앞에 공백만 존재할 때",async()=>{
    const inputs=[" ,flee"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  })

  // 5. 예외 테스트 : 모든 자동차에 모든 라운드가 다 0일 경우
  test("예외 테스트 : 모든 자동차에 모든 라운드가 다 0일 경우",async()=>{
    const inputs=["flee,pobi","3"];
    const round=0;

    mockQuestions(inputs);
    mockRandoms([round,round,round]);

    await expect(app.run()).rejects.toThrow("[ERROR]")
  })
});
