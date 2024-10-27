import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const MOVING_FORWARD = 4;
const STOP = 3;

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (...rounds) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  rounds.forEach((numbers) => {
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

const runAppAndVerifyLogs = async (inputs, randoms, expectedLogs) => {
  const logSpy = getLogSpy();
  await runAppWithMocks(inputs, randoms);
  verifyLogs(logSpy, expectedLogs);
};

const runAppWithMocks = async (inputs, randoms) => {
  mockQuestions(inputs);
  mockRandoms(...randoms);
  const app = new App();
  await app.run();
};

const verifyLogs = (logSpy, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

describe('자동차 경주 결과 테스트', () => {
  test('우승자 정상 출력 - 두 명 중 한 명 우승 케이스', async () => {
    const inputs = ["pobi,woni", "1"];
    const randoms = [[STOP, MOVING_FORWARD]];
    const expectedLogs = ["pobi : ", "woni : -", "최종 우승자 : woni"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 세 명 중 한 명 우승 케이스', async () => {
    const inputs = ["pobi,woni,jun", "1"];
    const randoms = [[STOP, STOP, MOVING_FORWARD]];
    const expectedLogs = ["pobi : ", "woni : ", "jun : -", "최종 우승자 : jun"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 열 명 중 한 명 우승 케이스', async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j", "1"];
    const randoms = [[STOP, STOP, STOP, STOP, MOVING_FORWARD, STOP, STOP, STOP, STOP, STOP]];
    const expectedLogs = ["a : ", "b : ", "c : ", "d : ", "e : -", "f : ", "g : ", "h : ", "i : ", "j : ", "최종 우승자 : e"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 열 명 중 여러 명 우승 케이스', async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j", "1"];
    const randoms = [[MOVING_FORWARD, STOP, STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, STOP, STOP, STOP, STOP]];
    const expectedLogs = ["a : -", "b : ", "c : ", "d : ", "e : -", "f : -", "g : ", "h : ", "i : ", "j : ", "최종 우승자 : a, e, f"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 자동차가 한 대뿐인 경우', async () => {
    const inputs = ["pobi", "1"];
    const randoms = [[STOP]];
    const expectedLogs = ["pobi : ", "최종 우승자 : pobi"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 아무도 전진하지 않은 경우', async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j", "1"];
    const randoms = [[STOP, STOP, STOP, STOP, STOP, STOP, STOP, STOP, STOP, STOP]];
    const expectedLogs = ["a : ", "b : ", "c : ", "d : ", "e : ", "f : ", "g : ", "h : ", "i : ", "j : ", "최종 우승자 : a, b, c, d, e, f, g, h, i, j"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 모두 똑같이 전진한 경우', async () => {
    const inputs = ["a,b,c,d,e,f,g,h,i,j", "1"];
    const randoms = [[MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]];
    const expectedLogs = ["a : -", "b : -", "c : -", "d : -", "e : -", "f : -", "g : -", "h : -", "i : -", "j : -", "최종 우승자 : a, b, c, d, e, f, g, h, i, j"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('우승자 정상 출력 - 시도 횟수가 여러번인 경우', async () => {
    const inputs = ["pobi,woni,jun", "2"];
    const randoms = [[STOP, MOVING_FORWARD, MOVING_FORWARD], [STOP, MOVING_FORWARD, STOP]];
    const expectedLogs = ["pobi : ", "woni : --", "jun : -", "최종 우승자 : woni"];

    await runAppAndVerifyLogs(inputs, randoms, expectedLogs);
  });

  test('불필요한 로그가 찍히지 않는지 검사 - 시도 횟수가 2일 때 3번 이상 시도되지 않음', async () => {
    const inputs = ["pobi,woni", "2"];
    const randoms = [[MOVING_FORWARD, MOVING_FORWARD], [MOVING_FORWARD, MOVING_FORWARD]];
    const logSpy = getLogSpy();

    await runAppWithMocks(inputs, randoms);

    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining("pobi : ---"));
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining("woni : ---"));
  });
});
