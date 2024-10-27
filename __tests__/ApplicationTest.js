import App from '../src/App.js';
import {
  mockQuestions,
  mockRandoms,
  getLogSpy,
} from '../src/utils/testUtil.js';

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

  test.each([[['pobi,javaji']], [[',javaji']]])(
    '자동차 이름 입력 예외 테스트: %s',
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.run()).rejects.toThrow('[ERROR]');
    }
  );

  test.each([
    [['pobi,haesa', '-1']],
    [['pobi,haesa', '1.1']],
    [['pobi,haesa', 'a']],
  ])('시도 횟수 입력 예외 테스트: %s', async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
