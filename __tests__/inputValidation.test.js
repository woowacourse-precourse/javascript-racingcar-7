import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('자동차 경주: 입력 검증 테스트', () => {
  test('자동차 이름이 유효하면 에러를 발생하지 않는다.', async () => {
    // given
    const inputs = ['minda,abc', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const logSpy = getLogSpy();
    await app.run();

    // then
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('자동차 이름이 5자를 초과하면 에러를 발생시킨다', async () => {
    // given
    const inputs = ['simpsons,abe'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('특수문자 -_!: 외에는 에러를 발생시킨다', async () => {
    // given
    const inputs = ['sim?,sons']; // javaji는 6자로 제한 초과
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('유효한 이동 횟수가 입력되면 에러가 발생하지 않는다', async () => {
    // given
    const inputs = ['minda,abe', '3'];
    mockQuestions(inputs);

    // when
    const app = new App();
    const logSpy = getLogSpy();
    await app.run();

    // then
    expect(logSpy).not.toHaveBeenCalledWith(expect.stringContaining('[ERROR]'));
  });

  test('잘못된 이동 횟수 입력 시 에러를 발생시킨다', async () => {
    // given
    const inputs = ['minda,abe', '-1'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
