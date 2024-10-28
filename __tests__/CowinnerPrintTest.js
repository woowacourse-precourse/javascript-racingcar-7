import { MissionUtils } from '@woowacourse/mission-utils';
import Racingcar from '../src/model/racingcar.js';
import App from '../src/App.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('공동 우승자 출력 기능 테스트', () => {
  test('공동 우승자 쉼표로 구분하여 문구 출력', () => {
    const winnerCar = new Racingcar('haku');
    const anotherWinnerCar = new Racingcar('haul');
    const cowinner = [winnerCar, anotherWinnerCar];
    const print = '최종 우승자 : haku, haul';
    const logSpy = getLogSpy();

    winnerCar.distance = 4;
    anotherWinnerCar.distance = 4;

    const app = new App();
    const winner = app.totalWinner(cowinner);
    app.printWinner(winner);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(print));
  });
});
