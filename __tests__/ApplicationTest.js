import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';
import parseCarString from '../src/inputHandler.js';

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

describe(
  '자동차 경주',
  () => {
    test.skip('기능 테스트', async () => {
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

    test.skip('예외 테스트', async () => {
      // given
      const inputs = ['pobi,javaji'];
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  },

  describe('입력모듈 테스트', () => {
    test.each([
      ['pobi,woni,jun', ['pobi', 'woni', 'jun']],
      ['pobi, woni ,jun', ['pobi', ' woni ', 'jun']],
      ['', new Error('[ERROR]')],
      ['pobi,,woni', new Error('[ERROR]')],
    ])('parseCarString(%s)', (inputs, expected) => {
      //given
      const inputString = inputs;

      //when
      if (expected instanceof Error) {
        //then
        expect(() => parseCarString(inputString)).toThrow(expected.message);
      } else {
        //then
        expect(parseCarString(inputString)).toEqual(expected);
      }
    });
  }),
);
