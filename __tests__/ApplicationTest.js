import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_DETAILS } from '../src/constants.js';

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
  test('레이싱 경기 후 진행 과정과 결과가 출력되는지 검증한다', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '3'];
    const logs = [
      '실행 결과',
      'pobi : ---',
      'woni : --',
      '최종 우승자 : pobi'
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, STOP,
    ]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test.each([
    { 
      description: '공백으로 입력된 자동차 이름이 있으면 에러를 던진다',
      inputs: [''],
      expectedError: ERROR_DETAILS.CARNAME_EMPTY,
    },
    { 
      description: '중복된 레이서 이름이 있으면 에러를 던진다',
      inputs: ['pobi,pobi'],
      expectedError: ERROR_DETAILS.CARNAMES_DUPLICATE,
    },
    {
      description: '이동 횟수가 NaN인 경우 에러를 던진다',
      inputs: ['pobi', 'a'],
      expectedError: ERROR_DETAILS.SECONDS_NAN,
    },
    {
      description: '이동 횟수가 음수인 경우 에러를 던진다',
      inputs: ['pobi', '-1'],
      expectedError: ERROR_DETAILS.SECONDS_NOT_POSITIVE,
    },
    {
      description: '이동 횟수가 실수인 경우 에러를 던진다',
      inputs: ['pobi', '1.1'],
      expectedError: ERROR_DETAILS.SECONDS_NOT_SAFE_INTEGER,
    },
    {
      description: '레이서 이름이 6자 이상인 경우 에러를 던진다',
      inputs: ['123456,12345'],
      expectedError: ERROR_DETAILS.CARNAME_LENGTH,
    }
  ])('$description', async ({ inputs, expectedError }) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow(expectedError);
  });
});
