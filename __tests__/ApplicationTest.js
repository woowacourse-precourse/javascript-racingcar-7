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
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test.each([
    ['', `[ERROR]빈 문자열은 입력이 불가능합니다.`],
    ['pobi,j un', `[ERROR]공백이 포함된 문자열은 입력이 불가능합니다.`],
    [',,', `[ERROR]자동차 이름을 1개 이상 입력해주세요.`],
    ['pobi,jun,', `[ERROR]구분자는 자동차 이름 사이에 1개씩만 쓰여야 합니다.`],
    ['pobipobi,jun', `[ERROR]자동차 이름은 5자 이하만 가능합니다.`],
  ])('validateCarNames(%s) throws %s', async (carInput, expected) => {
    mockQuestions([carInput]);

    const app = new App();
    await expect(app.run()).rejects.toThrow(expected);
  });

  test.each([
    {
      carInput: 'pobi,jun',
      gameCount: '0',
      expected: `[ERROR]음수 혹은 0은 안됩니다.`,
    },

    {
      carInput: 'pobi,jun',
      gameCount: '-2',
      expected: `[ERROR]음수 혹은 0은 안됩니다.`,
    },

    {
      carInput: 'pobi',
      gameCount: 'NaN',
      expected: `[ERROR]양수 정수만 가능합니다.`,
    },

    {
      carInput: 'pobi,jun',
      gameCount: 'Infinity',
      expected: `[ERROR]양수 정수만 가능합니다.`,
    },

    {
      carInput: 'pobi,jun',
      gameCount: 'ch',
      expected: `[ERROR]양수 정수만 가능합니다.`,
    },
  ])(
    'validateGameCount($gameCount) throws $expected',
    async ({ carInput, gameCount, expected }) => {
      mockQuestions([carInput, gameCount]);

      const app = new App();
      await expect(app.run()).rejects.toThrow(expected);
    },
  );
});
