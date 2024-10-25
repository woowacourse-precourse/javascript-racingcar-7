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
  test('레이싱 경기 후 진행 과정과 결과가 출력되는지 검증한다', async () => {
    // given
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

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('공백으로 입력된 자동차 이름이 있으면 에러를 던진다', async () => {
    // given
    const inputs = [''];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.CARNAME_EMPTY),
      );
  });

  test('중복된 레이서 이름이 있는지 있으면 에러를 던진다', async () => {
    // given
    const inputs = ['pobi,pobi'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.CARNAMES_DUPLICATE),
      );
  });

  test('이동 횟수가 NaN인 경우 에러를 던진다', async () => {
    // given
    const inputs = ['pobi', 'a'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.SECONDS_NAN),
      );
  });

  test('이동 횟수가 음수인 경우 에러를 던진다', async () => {
    // given
    const inputs = ['pobi', '-1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.SECONDS_NOT_POSITIVE),
      );
  });

  test('이동 횟수가 실수인 경우 에러를 던진다', async () => {
    // given
    const inputs = ['pobi', '1.1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.SECONDS_NOT_SAFE_INTEGER),
      );
  });

  test('레이서 이름이 6자 이상인 경우 에러를 던진다', async () => {
    // given
    const inputs = ['123456,12345'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    app.run()
      .catch(
        (error) => expect(error.message).toMatch(ERROR_DETAILS.CARNAME_LENGTH),
      );
  });
});
