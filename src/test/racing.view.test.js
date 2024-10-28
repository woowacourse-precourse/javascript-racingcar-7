import { RacingView } from '../racing/racing.view.js';
import { getLogSpy } from '../lib/testUtils.js';

describe('RacingView', () => {
  /** @type {RacingView} */
  let racingView;

  beforeEach(() => {
    racingView = new RacingView();
  });

  describe('printBreakLine', () => {
    it('호출시 new line을 출력해야한다', () => {
      const logs = [''];
      const logSpy = getLogSpy();

      racingView.printLineBreak();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe('printGameStart', () => {
    it('호출 시 new line이후 게임이 시작됨을 알리는 문구가 출력되야한다', () => {
      const logs = ['', RacingView.MESSAGE.GAME_START];
      const logSpy = getLogSpy();

      racingView.printGameStart();

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe('printRacing', () => {
    it('호출 시 레이싱 게임 진행 상황이 출력되야한다', () => {
      const cars = [{ name: 'pobi', travelDistance: 5 }];

      const logSpy = getLogSpy();
      const logs = [RacingView.MESSAGE.RACING(cars[0])];

      racingView.printRacing(cars);

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });

  describe('printGameEnd', () => {
    it('호출 시 게임이 결과가 출력되야한다', () => {
      const winners = 'pobi';

      const logSpy = getLogSpy();
      const logs = [RacingView.MESSAGE.GAME_END(winners)];

      racingView.printGameEnd(winners);

      logs.forEach((log) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
      });
    });
  });
});
