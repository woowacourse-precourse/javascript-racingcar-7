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

  // 예외 케이스 테스트
  describe('예외 케이스', () => {
    test.each([
      ['자동차 이름이 5자를 초과했을 경우', ['carName12,car1', '1']],
      ['자동차 이름이 빈 문자열인 경우', [',car1', '1']],
      ['자동차 이름이 중복일 경우', ['car1,car1', '2']],
      ['게임 횟수가 0인 경우', ['car1,car12', '0']],
      ['게임 횟수가 숫자가 아닌 경우', ['car1,car12', 'abc']],
      ['게임 횟수가 음수인 경우', ['car1,car12', '-2']],
    ])('%s', async (_testName, inputs) => {
      mockQuestions(inputs);
      const app = new App();
      await expect(app.run()).rejects.toThrow('[ERROR]');
    });
  });
});
