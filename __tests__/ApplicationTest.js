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


});

describe('테이스 케이스 추가', () => {
  test.each([
    {
      name: '세 명의 참가자가 모두 우승하는 경우',
      randoms: [4, 4, 4],
      inputs: ['pobi,woni,jun', '1'],
      logs: ['pobi : -', 'woni : -', 'jun : -', '최종 우승자 : pobi, woni, jun'],
    },

  ])('테스트 케이스 : $name', async ({ randoms, inputs, logs }) => {
    mockQuestions(inputs);
    mockRandoms(randoms);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
  test.each([
    {
      name: '자동차 개수가 1개인 경우 ',
      inputs: ['pobi', '1'],
    },
    {
      name: '자동차 이름이 빈 문자열인 경우',
      inputs: ['', '1'],
    },
    {
      name: '자동차 이름의 길이가 5 초과인 경우',
      inputs: ['pobi,woni,aaaaaaaaa', '1'],
    },
    {
      name: '시도 횟수가 빈 문자열인 경우',
      inputs: ['pobi,woni', ''],
    },
    {
      name: '시도 횟수가 문자열인 경우',
      inputs: ['pobi,woni', 'asd'],
    },
    {
      name: '시도 횟수가 음수인 경우',
      inputs: ['pobi,woni', '-1'],
    },
    {
      name: '시도 횟수가 0인 경우',
      inputs: ['pobi,woni', '0'],
    },
    {
      name: '시도 횟수가 실수인 경우',
      inputs: ['pobi,woni', '1.5'],
    },
  ])('예외 테스트: $name', async ({ inputs }) => {
    mockQuestions(inputs);
    
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});