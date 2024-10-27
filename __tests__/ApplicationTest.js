import { MissionUtils, Console } from '@woowacourse/mission-utils';
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

  test('예외 테스트', async () => {
    // given
    const inputs = ['pobi,javaji', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test.each([
    {
      description: '이름이 중복될 때',
      inputs: ['pobi,pobi', '1'],
      errorMessage: '[ERROR]',
    },
    {
      description: '이름이 빈 문자열일 때',
      inputs: ['pobi,', '1'],
      errorMessage: '[ERROR]',
    },
    {
      description: '이름의 길이가 5가 넘을 때',
      inputs: ['pobi,javidd', '1'],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 0일 때',
      inputs: ['pobi,javi', '0'],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 소수일 때',
      inputs: ['pobi,javi', '2.1'],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 음수일 때',
      inputs: ['pobi,javi', '-1'],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 문자열일 때',
      inputs: ['pobi,javi', 'abc'],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 빈 문자열일 때',
      inputs: ['pobi,javi', ''],
      errorMessage: '[ERROR]',
    },
    {
      description: '시도 횟수가 소수점이지만 정수로 변환 가능할 때',
      inputs: ['pobi,javi', '2.0'],
      errorMessage: null,
    },
  ])('$description', async ({ inputs, errorMessage }) => {
    mockQuestions(inputs);

    const app = new App();

    if (errorMessage) {
      await expect(app.run()).rejects.toThrow(errorMessage);
    } else {
      await expect(app.run()).resolves.not.toThrow();
      Console.print('에러가 없음');
    }
  });
});

describe('자동차 경주', () => {
  describe.each([
    {
      description: '기능 테스트 - 모든 자동차가 이동하지 않을 때',
      inputs: ['pobi,woni', '3'],
      randoms: [3, 2, 3, 3, 2, 2],
      expectedLogs: [
        'pobi : ',
        'woni : ',
        'pobi : ',
        'woni : ',
        'pobi : ',
        'woni : ',
        '최종 우승자 : pobi, woni',
      ],
    },
    {
      description: '기능 테스트 - 모든 자동차가 매 시도마다 이동할 때',
      inputs: ['pobi,woni', '2'],
      randoms: [5, 5, 6, 6],
      expectedLogs: [
        'pobi : -',
        'woni : -',
        'pobi : --',
        'woni : --',
        '최종 우승자 : pobi, woni',
      ],
    },
    {
      description: '기능 테스트 - 특정 자동차만 움직이는 경우',
      inputs: ['pobi,woni', '3'],
      randoms: [4, 2, 4, 3, 4, 2],
      expectedLogs: [
        'pobi : -',
        'woni : ',
        'pobi : --',
        'woni : ',
        'pobi : ---',
        'woni : ',
        '최종 우승자 : pobi',
      ],
    },
    {
      description: '기능 테스트 - 4대의 자동차와 3회 시도',
      inputs: ['pobi,woni,javi,woowa', '3'],
      randoms: [4, 3, 5, 2, 6, 4, 3, 2, 7, 4, 3, 6],
      expectedLogs: [
        'pobi : -',
        'woni : ',
        'javi : -',
        'woowa : ',
        'pobi : --',
        'woni : -',
        'javi : -',
        'woowa : ',
        'pobi : ---',
        'woni : --',
        'javi : -',
        'woowa : -',
        '최종 우승자 : pobi',
      ],
    },
    {
      description: '기능 테스트 - 시도 횟수가 10회인 경우',
      inputs: ['pobi,woni', '10'],
      randoms: [4, 3, 4, 4, 4, 3, 3, 4, 4, 3, 4, 3, 3, 4, 4, 4, 4, 4, 3, 4],
      expectedLogs: [
        'pobi : -',
        'woni : ',
        'pobi : --',
        'woni : ',
        'pobi : ---',
        'woni : -',
        'pobi : ---',
        'woni : --',
        'pobi : ----',
        'woni : --',
        'pobi : -----',
        'woni : ---',
        'pobi : -----',
        'woni : ---',
        'pobi : ------',
        'woni : ----',
        'pobi : -------',
        'woni : ----',
        'pobi : -------',
        'woni : ----',
        '최종 우승자 : pobi',
      ],
    },
    {
      description: '기능 테스트 - 아무도 전진하지 않았을 때',
      inputs: ['pobi,woni', '1'],
      randoms: [3, 3],
      expectedLogs: ['pobi : ', 'woni : ', '최종 우승자 : pobi, woni'],
    },
  ])('$description', ({ inputs, randoms, expectedLogs }) => {
    test('자동차가 움직이는지 테스트', async () => {
      const logSpy = getLogSpy();

      mockQuestions(inputs);
      mockRandoms(randoms);

      const app = new App();
      await app.run();

      expectedLogs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
