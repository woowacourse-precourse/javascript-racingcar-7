import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import HandleError from '../src/utils/Error.js';
import {
  getValidAttemptValue,
  getValidChallengerNameList,
} from '../src/utils/GetValidInput.js';

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

const ATTEMPT_INPUT_ERROR = HandleError.ATTEMPT_INPUT_ERROR;
const NAME_INPUT_ERROR = HandleError.NAME_INPUT_ERROR;

// given
const MOVING_FORWARD = 4;
const STOP = 3;

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // print함수가 log와 예측한 로그 string을 포함하느냐
    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('기능 테스트', async () => {
    const inputs = ['pobi,woni', '3'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
    ]);

    // when
    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR]: ' + NAME_INPUT_ERROR.TooLongName
    );
  });

  test('실행 횟수 예외테스트', async () => {
    // given
    const inputs = ['pobi,abcd'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      '[ERROR]: ' + ATTEMPT_INPUT_ERROR.IsEmpty
    );
  });

  const attemptsUnvalidTestCase = [
    ['', ATTEMPT_INPUT_ERROR.IsEmpty],
    ['  ', ATTEMPT_INPUT_ERROR.IsBlank],
    ['-1', ATTEMPT_INPUT_ERROR.IsNotInt],
    ['0.5', ATTEMPT_INPUT_ERROR.IsNotInt],
    ['#*@', ATTEMPT_INPUT_ERROR.IsNotInt],
    ['$02', ATTEMPT_INPUT_ERROR.IsNotInt],
  ];
  test.each(attemptsUnvalidTestCase)(
    '실행 횟수 입력 예외:  %s  입력 ',
    (attemptInput, expected) => {
      expect(() => getValidAttemptValue(attemptInput)).toThrow(
        `[ERROR]: ${expected}`
      );
    }
  );

  const nameUnvalidTestCase = [
    ['', NAME_INPUT_ERROR.IsEmpty],
    ['  ', NAME_INPUT_ERROR.IsBlank],
    ['    ,', NAME_INPUT_ERROR.IsBlank],
    [',  ', NAME_INPUT_ERROR.IsEmpty],
    ['13313, ', NAME_INPUT_ERROR.IsBlank],
    ,
  ];

  test.each(nameUnvalidTestCase)(
    ' 이름 입력 예외 , 입력 %s',
    (namesInput, expected) => {
      expect(() => getValidChallengerNameList(namesInput)).toThrow(
        `[ERROR]: ${expected}`
      );
    }
  );
});
