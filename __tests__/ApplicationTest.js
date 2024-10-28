import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

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

// 기능 테스트 함수
const functionalTestCase = async (inputs, randoms, logs) => {
  mockQuestions(inputs);
  mockRandoms(randoms);
  const logSpy = getLogSpy();

  const app = new App();
  await app.run();

  logs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

// 예외 테스트 함수
const exceptionTestCase = async (inputs, expectedError) => {
  mockQuestions(inputs);

  const app = new App();

  await expect(app.run()).rejects.toThrow(expectedError);
};

describe('자동차 경주', () => {
  test('기능 테스트 - 우승자가 한 명인 경우', async () => {
    await functionalTestCase(
      ['pobi,woni', '1'],
      [3, 4],
      ['pobi : ', 'woni : -', '최종 우승자 : woni'],
    );
  });

  test('기능 테스트 - 우승자가 여러 명일 경우', async () => {
    await functionalTestCase(
      ['pobi,woni', '2'],
      [3, 2, 4, 4],
      [
        'pobi : ',
        'woni : ',
        'pobi : -',
        'woni : -',
        '최종 우승자 : pobi, woni',
      ],
    );
  });

  test('기능 테스트 - 우승자가 여러 명일 경우 2', async () => {
    await functionalTestCase(
      ['pobi,woni,jun', '5'],
      [4, 2, 4, 4, 4, 4, 5, 5, 5, 6, 4, 6, 4, 4, 4],
      [
        'pobi : -',
        'woni : ',
        'jun : -',
        'pobi : --',
        'woni : -',
        'jun : --',
        'pobi : ---',
        'woni : --',
        'jun : ---',
        'pobi : ----',
        'woni : ---',
        'jun : ----',
        'pobi : -----',
        'woni : ----',
        'jun : -----',
        '최종 우승자 : pobi, jun',
      ],
    );
  });

  test('예외 테스트 - 참가자 수가 두 명 이상이 아닌 경우', async () => {
    await exceptionTestCase(['pobi'], ERROR_MESSAGES.NOT_ENOUGH_PATICIPANTS);
  });

  test('예외 테스트 - 쉼표가 올바르지 않은 위치에 있는 경우', async () => {
    await exceptionTestCase([',pobi,jun'], ERROR_MESSAGES.INVALID_COMMA);
  });

  test('예외 테스트 - 경주할 자동차 이름 입력 시 숫자, 영어, 쉼표 이외의 문자를 입력한 경우', async () => {
    await exceptionTestCase(['pobi, jun'], ERROR_MESSAGES.INVALID_NAME);
  });

  test('예외 테스트 - 중복된 자동차 이름이 있는 경우', async () => {
    await exceptionTestCase(['pobi,pobi,jun'], ERROR_MESSAGES.DUPLICATE_NAME);
  });

  test('예외 테스트 - 자동차 이름이 5자 이상인 경우', async () => {
    await exceptionTestCase(['pobi,javaji'], ERROR_MESSAGES.EXCEED_NAME_LENGTH);
  });
});
