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
  test("1. 기능 테스트 - 우승자 한명", async () => {
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

  test("2. 기능 테스트 - 우승자 한명이상", async () => {
    const MOVING_FORWARD = 8;
    const STOP = 1;
    const inputs = ["pobi,woni,jun", "1"];
    const logs = ["pobi : -", "woni : ", "jun : -", "공동 우승자 : pobi, jun"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP, MOVING_FORWARD]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("3. 기능 테스트 - 여러 번 이동", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,woni,jun", "2"];
    const logs = [
      "pobi : -",
      "woni : ",
      "jun : -",
      "pobi : -",
      "woni : -",
      "jun : --",
      "최종 우승자 : jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("4. 기능 테스트 - 여러 번 이동, 우승자 한명이상", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,woni,jun", "4"];
    const logs = [
      "pobi : -",
      "woni : ",
      "jun : -",

      "pobi : --",
      "woni : -",
      "jun : --",

      "pobi : ---",
      "woni : --",
      "jun : --",

      "pobi : ---",
      "woni : ---",
      "jun : --",
      "공동 우승자 : pobi, woni",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,

      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,

      STOP,
      MOVING_FORWARD,
      STOP,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("5. 기능 테스트 - 자동차 모두 우승자일 때", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,woni,jun", "3"];
    const logs = [
      "pobi : -",
      "woni : -",
      "jun : ",

      "pobi : -",
      "woni : --",
      "jun : -",

      "pobi : --",
      "woni : --",
      "jun : --",

      "무승부 : pobi, woni, jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,

      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,

      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("6. 기능 테스트 - 같은 이름이 존재", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,pobi,jun", "3"];
    const logs = [
      "1.pobi : -",
      "2.pobi : ",
      "jun : ",

      "1.pobi : --",
      "2.pobi : -",
      "jun : -",

      "1.pobi : --",
      "2.pobi : -",
      "jun : -",

      "최종 우승자 : 1.pobi",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,

      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      STOP,
      STOP,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("7. 입력 테스트 - 자동차 이름에 공백이 있을 떄", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi     ,wo ni,    jun ", "6"];
    const logs = [
      "pobi : -",
      "wo ni : ",
      "jun : -",

      "pobi : --",
      "wo ni : -",
      "jun : --",

      "pobi : --",
      "wo ni : --",
      "jun : --",

      "pobi : --",
      "wo ni : --",
      "jun : --",

      "pobi : ---",
      "wo ni : ---",
      "jun : ---",

      "pobi : ---",
      "wo ni : ----",
      "jun : ----",
      "공동 우승자 : wo ni, jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,

      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      MOVING_FORWARD,
      STOP,

      STOP,
      STOP,
      STOP,

      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("8. 입력 테스트 - 자동차 이름에 다양한 특수 문자 존재", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["po/bi,2woni,j..un", "3"];
    const logs = [
      "po/bi : -",
      "2woni : -",
      "j..un : -",

      "po/bi : -",
      "2woni : --",
      "j..un : --",

      "po/bi : --",
      "2woni : --",
      "j..un : ---",

      "최종 우승자 : j..un",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
  test("9. 입력 테스트 - 이름이 없는 자동차가 있을 때", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,,jun", "3"];
    const logs = [
      "pobi : -",
      "jun : -",

      "pobi : -",
      "jun : --",

      "pobi : --",
      "jun : ---",

      "최종 우승자 : jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      MOVING_FORWARD,

      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("10. 입력 테스트 - 자동차 이름에 ','가 포함돼있을 때", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,j,,un", "3"];
    const logs = [
      "pobi : -",
      "j,,un : -",

      "pobi : -",
      "j,,un : --",

      "pobi : --",
      "j,,un : ---",

      "최종 우승자 : j,,un",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      MOVING_FORWARD,

      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("11. 입력 테스트 - 시도 횟수에 스페이스가 포함될 때", async () => {
    const MOVING_FORWARD = 5;
    const STOP = 2;
    const inputs = ["pobi,jun", "  1   0  "];
    const logs = [
      "pobi : -",
      "jun : -",

      "pobi : --",
      "jun : -",

      "pobi : --",
      "jun : --",

      "pobi : --",
      "jun : --",

      "pobi : ---",
      "jun : ---",

      "pobi : ----",
      "jun : ---",

      "pobi : -----",
      "jun : ----",

      "pobi : -----",
      "jun : ----",

      "pobi : -----",
      "jun : -----",

      "pobi : -----",
      "jun : ------",

      "최종 우승자 : jun",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,

      MOVING_FORWARD,
      STOP,

      STOP,
      MOVING_FORWARD,

      STOP,
      STOP,

      MOVING_FORWARD,
      MOVING_FORWARD,

      MOVING_FORWARD,
      STOP,

      MOVING_FORWARD,
      MOVING_FORWARD,

      STOP,
      STOP,

      STOP,
      MOVING_FORWARD,

      STOP,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("12. 예외 테스트 - 한 대이상의 자동차 이름을 입력하지 않았을 때", async () => {
    const inputs = ["", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("13. 예외 테스트 - 너무 많은 자동차가 있을 때", async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z", "3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("14. 예외 테스트 - 자동차 이름이 5자 이상일 때", async () => {
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("15. 예외 테스트 - 시도 횟수를 아무것도 입력 안했을 때", async () => {
    const inputs = ["pobi,woni", ""];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("16. 예외 테스트 - 시도 횟수를 스페이스만 입력 했을 때", async () => {
    const inputs = ["pobi,woni", " "];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("17. 예외 테스트 - 시도 횟수가 숫자가 아닐 때", async () => {
    const inputs = ["pobi,woni", "3a3"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
  test("18. 예외 테스트 - 시도 횟수가 너무 많을 때", async () => {
    const inputs = ["pobi,woni", (Number.MAX_SAFE_INTEGER + 1).toString()];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("19. 예외 테스트 - 시도 횟수가 양의 정수가 아닐 때", async () => {
    const inputs = ["pobi,woni", "5.1"];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
