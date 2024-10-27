import App from "../src/App.js";
import { Console, MissionUtils } from "@woowacourse/mission-utils";

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

describe('updateCarProgressRandomly', () => {
  test('random 값이 4 이상일 때 carNameObj의 해당 키 값이 증가', () => {
    const app = new App();
    app.carNameObj = { pobi: 0, woni: 0, jun: 0};

    jest.spyOn(MissionUtils.Random, 'pickNumberInRange')
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(5)
    .mockReturnValueOnce(2);

    app.updateCarProgressRandomly();

    expect(app.carNameObj).toEqual({
      pobi: 1,
      woni: 1,
      jun: 0,
    });

    MissionUtils.Random.pickNumberInRange.mockRestore();
  });
});

describe('printRaceResult', () => {
  test('carNameObj에 저장된 각 자동차 이름과 이동 거리를 "-"로 출력', () => {
    const app = new App();
    app.carNameObj = {
      pobi: 3,
      woni: 2,
      jun: 0,
    };

    const printSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});

    app.printRaceResult();

    expect(printSpy).toHaveBeenCalledWith("pobi : ---");
    expect(printSpy).toHaveBeenCalledWith("woni : --");
    expect(printSpy).toHaveBeenCalledWith("jun : ");
    expect(printSpy).toHaveBeenCalledWith(" ");

    printSpy.mockRestore();
  });
})

describe('printWinner', () => {
  let app;
  let printSpy;

  beforeEach(() => {
    app = new App();
    printSpy = jest.spyOn(Console, 'print').mockImplementation(() => {});
  });

  afterEach(() => {
    printSpy.mockRestore();
  });

  test('최종 우승자가 하나일 때', () => {
    app.carNameObj = {
      pobi: 3,
      woni: 2,
      jun: 1,
    };

    app.printWinner();

    expect(printSpy).toHaveBeenCalledWith("최종 우승자 : pobi");
  });

  test('최종 우승자가 여러 명일 때', () => {
    app.carNameObj = {
      pobi: 3,
      woni: 3,
      jun: 1,
    };

    app.printWinner();

    expect(printSpy).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });

  test('우승자가 없을 때', () => {
    app.carNameObj = {
      pobi: 0,
      woni: 0,
      jun: 0,
    };

    expect(() => app.printWinner()).toThrow("[ERROR]");
    expect(printSpy).toHaveBeenCalledWith("우승자가 없습니다.");
  });
});

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
