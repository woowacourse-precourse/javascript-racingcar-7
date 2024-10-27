import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주', () => {
  describe('기능 테스트', () => {
    test('자동차 3대가 정상적으로 경주한다', async () => {
      // given
      const MOVING_RANDOM = [5, 1, 1, 9, 8, 2, 3, 3, 3];
      const inputs = ['po,woni,java', '3'];
      const logs = ['po : -', 'woni : ', 'java : ',
        'po : --', 'woni : -', 'java : ',
        'po : --', 'woni : -', 'java : ',
        '최종 우승자 : po'];
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms(MOVING_RANDOM);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
