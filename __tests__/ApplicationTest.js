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


  test("1. 차 이름 입력 - 예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("2. 시도 횟수 입력 - 예외 테스트", async ()=>{
    //given
    const inputs = ["pobi,woni", "a"];
    mockQuestions(inputs);

    //when
    const app = new App();

    //then
    await expect(app.run()).rejects.toThrow("[ERROR]")

  });

  test("3. 경주 - 경곗값 테스트",async () => {
    //given
    const inputs = ["pobi,woni,kona","2"];
    const FORWARD = 5
    const BOUNDARY = 4 
    const STOP = 3
    const logs = ["pobi : -","woni : -","kona : ","","pobi : --","woni : -","kona : ","","최종 우승자 : pobi"]
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([FORWARD,BOUNDARY,STOP,FORWARD,STOP,STOP])

    //when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

  })

  test("4. 우승자 출력 테스트 - 공통으로 있을 때", async () => {
    
    //given
    const inputs = ["pobi,woni,kona", "2"];
    const FORWARD = 4 
    const STOP = 3
    const logs = ["pobi : -","woni : ","kona : -","","pobi : --","woni : ","kona : --","최종 우승자 : pobi, kona"]
    const logSpy = getLogSpy();
    mockQuestions(inputs);
    mockRandoms([FORWARD,STOP,FORWARD,FORWARD,STOP,FORWARD])

    //when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });

  })


});
