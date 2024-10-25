import OutputView from '../src/View/OutputView';
import { getLogSpy } from './ApplicationTest';

describe('OutputView', () => {
  test('실행 결과를 출력한다', () => {
    const log = '실행 결과';
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printExecutionResults();

    expect(logSpy).toHaveBeenCalledWith(log);
  });

  test('자동차의 전진 여부를 출력한다', () => {
    const carName = 'pobi';
    const forwardCount = 3;
    const log = 'pobi : ---';
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printCarProgress(carName, forwardCount);

    expect(logSpy).toHaveBeenCalledWith(log);
  });

  test('모든 자동차의 전진 여부를 출력한다', () => {
    const carName = ['pobi', 'woni'];
    const forwardCount = [3, 1];
    const logs = ['pobi : ---', 'woni : -'];
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printAllCarProgress(carName, forwardCount);

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test('우승자를 출력한다', () => {
    const winner = ['pobi'];
    const log = '최종 우승자 : pobi';
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printWinners(winner);

    expect(logSpy).toHaveBeenCalledWith(log);
  });

  test('우승자가 여려 명일 경우 쉼표로 구분하여 우승자를 출력한다', () => {
    const winners = ['pobi', 'jun'];
    const log = '최종 우승자 : pobi, jun';
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printWinners(winners);

    expect(logSpy).toHaveBeenCalledWith(log);
  });
});
