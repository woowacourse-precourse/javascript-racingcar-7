import App from '../src/App.js';
import { getLogSpy, mockQuestions, mockRandoms } from '../utils/testUtils.js';

const MOVING_FORWARD = 4;
const STOP = 3;

describe('자동차 경주', () => {
  // 정상 케이스 테스트
  describe('자동차 경주', () => {
    test.each([
      [
        '단독 우승 테스트',
        ['pobi,woni', '1'],
        ['pobi : ', 'woni : -', '최종 우승자 : woni'],
        [STOP, MOVING_FORWARD],
      ],
      [
        '공동 우승 테스트',
        ['pobi,woni', '2'],
        [
          'pobi : -',
          'woni : -',
          'pobi : --',
          'woni : --',
          '최종 우승자 : pobi, woni',
        ],
        [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
      ],
      [
        '3대 이상 자동차 테스트',
        ['pobi,woni,jun', '2'],
        [
          'pobi : -',
          'woni : -',
          'jun : -',
          'pobi : -',
          'woni : --',
          'jun : --',
          '최종 우승자 : woni, jun',
        ],
        [
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          STOP,
          MOVING_FORWARD,
          MOVING_FORWARD,
        ],
      ],
      [
        '4대 이상 공동 우승 자동차 테스트',
        ['pobi,woni,jun,eunwo', '2'],
        [
          'pobi : -',
          'woni : -',
          'jun : -',
          'eunwo : -',
          'pobi : --',
          'woni : --',
          'jun : --',
          'eunwo : --',
          '최종 우승자 : pobi, woni, jun, eunwo',
        ],
        [
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
          MOVING_FORWARD,
        ],
      ],
    ])('%s', async (_testName, inputs, logs, random) => {
      const logSpy = getLogSpy();
      mockQuestions(inputs);
      mockRandoms(random);

      const app = new App();
      await app.run();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
