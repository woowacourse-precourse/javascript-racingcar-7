import RacingGameManager from '../src/RacingGameManager.js';
import { getLogSpy, mockRandoms } from './ApplicationTest.js';

describe('RacingGameManager 로직 테스트', () => {
  let gameManager;

  const carName = ['pobi', 'woni', 'crong', 'zaeee'];
  const tryCount = 2;

  const MOVING_FORWARD = 4;
  const STOP = 3;

  beforeEach(() => {
    gameManager = new RacingGameManager(carName, tryCount);
  });

  test('우승자가 한명일 경우', () => {
    // given
    const logs = [
      '실행 결과',
      'pobi : -',
      'woni : ',
      'crong : ',
      'zaeee : ',
      'pobi : --',
      'woni : ',
      'crong : ',
      'zaeee : ',
      '최종 우승자 : pobi',
    ];
    const logSpy = getLogSpy();

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
    ]);

    // when
    gameManager.playGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('우승자가 두명 이상일 경우', () => {
    // given
    const logs = [
      '실행 결과',
      'pobi : -',
      'woni : -',
      'crong : -',
      'zaeee : -',
      'pobi : --',
      'woni : --',
      'crong : --',
      'zaeee : --',
      '최종 우승자 : pobi, woni, crong, zaeee',
    ];
    const logSpy = getLogSpy();

    mockRandoms([
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    // when
    gameManager.playGame();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
