import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../utils/testUtils.js';

describe('자동차 경주', () => {
  test('기능 테스트', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '1'];
    const logs = ['pobi : -', 'woni : ', '최종 우승자 : pobi'];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    const app = new App();
    await app.run();

    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('예외 테스트', async () => {
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
