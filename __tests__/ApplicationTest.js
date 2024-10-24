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
});

test.each([
  // Exception1
  [[], '[ERROR]'],
  [[null], '[ERROR]'],
  [['null'], '[ERROR]'],
  [[undefined], '[ERROR]'],
  [['undefined'], '[ERROR]'],
  [[''], '[ERROR]'],
  // Exception2
  [['ca r1'], '[ERROR]'],
  [['car1, car2'], '[ERROR]'],
  // Exception7
  [['car1'], '[ERROR]'],
  [['car1', null], '[ERROR]'],
  [['car1', 'null'], '[ERROR]'],
  [['car1', undefined], '[ERROR]'],
  [['car1', 'undefined'], '[ERROR]'],
  [['car1', ''], '[ERROR]'],
  // Exception8
  [['car1', '3 2'], '[ERROR]'],
  [['car1', '32 '], '[ERROR]'],
  [['car1', ' 32'], '[ERROR]'],
  [['car1', ' '], '[ERROR]'],
  // Exception5
  [['naaaaame', '1'], '[ERROR]'],
  // Exception6
  [['name,name,name', '1'], '[ERROR]'],
  [['name,name1,name', '1'], '[ERROR]'],
  [['name,naaaaame1,name', '1'], '[ERROR]'],
])('areAnagrams(%s) returns %s', async (first) => {
  // given
  mockQuestions(first);

  // when
  const app = new App();

  await expect(app.run()).rejects.toThrow('[ERROR]');
});
