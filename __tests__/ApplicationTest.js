import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = numbers => {
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
  const functionTest = (inputs, logs, randoms) => {
    test('기능 테스트', async () => {
      // given
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms(randoms);

      // when
      const app = new App();
      await app.run();

      // then
      logs.forEach(log => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  };

  const exceptionTest = inputs => {
    test('예외 테스트', async () => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  };

  functionTest(['pobi,woni', '1'], ['pobi : -', 'woni : ', '최종 우승자 : pobi'], [4, 3]);
  functionTest(
    ['pobi,woni', '2'],
    ['pobi : -', 'woni : -', '최종 우승자 : pobi, woni'],
    [4, 3, 3, 4],
  );
  functionTest(
    ['pobi,woni', '5'],
    ['pobi : ----', 'woni : -----', '최종 우승자 : woni'],
    [4, 4, 3, 4, 4, 4, 4, 4, 4, 4],
  );

  exceptionTest(['pobi,jason', '0']);
  exceptionTest(['pobi,jason', '1.5']);
  exceptionTest(['pobi,jason', 'n']);
  exceptionTest(['pobi,javaji']);
  exceptionTest(['1234,5678']);
  exceptionTest(['pobi/java']);
  exceptionTest([',pobi']);
});
