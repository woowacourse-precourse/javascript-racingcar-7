import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

// Mocking Helper Functions
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
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주 - 유효성 검사', () => {
  test.each([
    {
      input: ['pobi,javaji'],
    },
    {
      input: ['pobi'],
    },
  ])('자동차 이름 유효성 검사 - 에러 메시지 출력', async ({ input }) => {
    // given
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test.each([
    {
      input: ['pobi,woni', '0'],
    },
    {
      input: ['pobi,woni', '-1'],
    },
  ])('시도 횟수 유효성 검사 - 에러 메시지 출력', async ({ input }) => {
    // given
    mockQuestions(input);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('자동차 경주 - 랜덤 이동 조건 테스트', () => {
  test('자동차가 Random 값에 따라 이동하는지 확인', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
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
});
