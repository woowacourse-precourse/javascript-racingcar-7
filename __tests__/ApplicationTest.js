import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

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
    [
      ['pobi,woni', '1'],
      [4, 3],
      ['pobi : -', 'woni : ', '최종 우승자 : pobi'],
    ],
    [
      ['pobi,woni', 1],
      [4, 3],
      ['pobi : -', 'woni : ', '최종 우승자 : pobi'],
    ],
    [
      ['pobi,woni,jun', '5'],
      [1, 0, 1, 2, 1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5],
      [
        '실행 결과',
        'pobi : -',
        'woni : ',
        'jun : -',
        '',
        'pobi : --',
        'woni : -',
        'jun : --',
        '',
        'pobi : ---',
        'woni : --',
        'jun : ---',
        '',
        'pobi : ----',
        'woni : ---',
        'jun : ----',
        '',
        'pobi : -----',
        'woni : ----',
        'jun : -----',
        '',
        '최종 우승자 : pobi, jun',
      ],
    ],
  ])('기능 테스트 - 입력값 %s, 랜덤 값 %s에 대해 출력이 %s여야 함', async (inputs, randomNumbers, expectedLogs) => {
    // given
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randomNumbers);

    // when
    const app = new App();
    await app.run();

    // then
    expectedLogs.forEach((log) => {
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
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test.each([
    ['pobi,,woni', '[ERROR] 잘못된 입력값 입니다. : pobi,,woni'],
    ['pobi.woni', '[ERROR] 잘못된 입력값 입니다. : pobi.woni'],
    ['pobi,sdfdasfasfd,woni', '[ERROR] 잘못된 입력값 입니다. : pobi,sdfdasfasfd,woni'],
    [null, '[ERROR] 잘못된 입력값 입니다. : null'],
    [undefined, '[ERROR] 잘못된 입력값 입니다. : undefined'],
    ['', '[ERROR] 잘못된 입력값 입니다. : '],
  ])('예외 테스트 : 자동차 이름 유효성 검사 - 입력값 %s에 대해 오류를 발생해야 함', async (carInput, expectedError) => {
    const inputs = [carInput];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(expectedError);
  });

  test.each([
    ['aaa', '[ERROR] 잘못된 형식의 입력값입니다. : aaa'],
    [' ', '[ERROR] 잘못된 형식의 입력값입니다. :  '],
    [0, '[ERROR] 잘못된 형식의 입력값입니다. : 0'],
    ['0', '[ERROR] 잘못된 형식의 입력값입니다. : 0'],
    [null, '[ERROR] 잘못된 형식의 입력값입니다. : null'],
    [undefined, '[ERROR] 잘못된 형식의 입력값입니다. : undefined'],
  ])(
    '예외 테스트 : 시도 횟수 유효성 검사 - 입력값 %s에 대해 오류를 발생해야 함',
    async (attemptInput, expectedError) => {
      const inputs = ['pobi,woni', attemptInput];
      mockQuestions(inputs);

      const app = new App();

      await expect(app.run()).rejects.toThrow(expectedError);
    }
  );

  test('예외 테스트 : 시도 횟수 유효성 검사 - 문자 형식의 숫자를 입력 했을때 오류가 발생하지 않아야 함', async () => {
    const inputs = ['pobi,woni', '5'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).resolves.not.toThrow();
  });
});
