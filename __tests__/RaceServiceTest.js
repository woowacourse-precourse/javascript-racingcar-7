import App from '../src/App';
import { getLogSpy, mockQuestions, mockRandoms } from './ApplicationTest';

describe('RaceService', () => {
  test('한 경기가 끝날때마다 결과를 출력한다.', async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ['pobi,woni', '3'];
    const logs = [
      '실행 결과',
      'pobi : -',
      'woni : ',
      'pobi : --',
      'woni : ',
      'pobi : --',
      'woni : -',
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
    ]);

    const app = new App();
    await app.run();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(log);
    });
  });
});
