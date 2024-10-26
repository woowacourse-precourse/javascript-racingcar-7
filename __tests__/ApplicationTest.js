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

describe('구현할 기능 목록 테스트 코드 작성', () => {
  test('경주할 자동차의 이름을 쉼표(,)로 구분하여 배열로 반환', async () => {
    // given
    const query =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
    const userInput = ['pobi,woni ,jun'];
    const expectedResult = ['pobi', 'woni', 'jun'];

    const logSpy = getLogSpy();
    const app = new App();

    mockQuestions(userInput);
    const result = await app.getCarNames(query);

    expect(result).toEqual(expectedResult);
  });

  test('총 시도할 횟수를 입력받기.', async () => {
    // given
    const QUERY = '시도할 횟수는 몇 회인가요?\n';
    const STOP = 5;

    const app = new App();

    mockQuestions([STOP]);
    const result = await app.getTryNumber(QUERY);

    expect(result).toEqual(STOP);
  });

  test('경주 점수 산출을 위한 객체 생성', async () => {
    // given
    const carNames = ['pobi', 'woni', 'jun'];
    const expectedResult = { pobi: 0, woni: 0, jun: 0 };

    const app = new App();

    const result = app.setGame(carNames);

    expect(result).toEqual(expectedResult);
  });

  test('각 플레이어가 0부터 9 사이의 무작위 값을 생성하여 생성된 값이 4 이상이면 해당 플레이어가 전진', async () => {
    // given
    const MOVING_FORWARD_ONE = 5;
    const MOVING_FORWARD_TWO = 5;
    const STOP = 3;

    const carNames = ['pobi', 'woni', 'jun'];
    const expectedResult = { pobi: 1, woni: 0, jun: 1 };

    const app = new App();
    mockRandoms([MOVING_FORWARD_ONE, STOP, MOVING_FORWARD_TWO]);

    const result = await app.executionResult(carNames);

    expect(result).toEqual(expectedResult);
  });
});

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
