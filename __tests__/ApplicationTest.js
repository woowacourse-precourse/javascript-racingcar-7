import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constant.js';
import Validator from '../src/Validator.js';

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

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
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

  test.each([
    { inputs: [], expectedError: ERROR_MESSAGE.EMPTY_INPUT },
    { inputs: ['pobi,javaji'], expectedError: ERROR_MESSAGE.NAME_TOO_LONG },
    { inputs: ['pobi,pobi'], expectedError: ERROR_MESSAGE.DUPLICATE_NAME },
    { inputs: ['pobi,java'], expectedError: ERROR_MESSAGE.EMPTY_INPUT },
    {
      inputs: ['pobi,java', '-1'],
      expectedError: ERROR_MESSAGE.INVALID_TRY_COUNT,
    },
    {
      inputs: ['pobi,java', '0'],
      expectedError: ERROR_MESSAGE.INVALID_TRY_COUNT,
    },
  ])('예외 테스트: %o', async ({ inputs, expectedError }) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
