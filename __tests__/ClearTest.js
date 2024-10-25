import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from './ApplicationTest.js';

describe('정상 자동차 경주', () => {
  test('단독 우승', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['min,sung', '1'];
    const logs = ['min : -', 'sung : ', '최종 우승자 : min'];
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

  test('공동 우승', async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['min,sung,je', '3'];
    const logs = [
      'min : -',
      'sung : ',
      'je : ',
      'min : -',
      'sung : -',
      'je : -',
      'min : --',
      'sung : --',
      'je : -',
      '최종 우승자 : min, sung',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
    ]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
