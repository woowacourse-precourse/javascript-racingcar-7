import { getLogSpy } from './ApplicationTest';

describe('OutputView', () => {
  test('실행 결과를 출력한다', () => {
    const log = '실행 결과';
    const logSpy = getLogSpy();

    const outputView = new OutputView();
    outputView.printExecutionResults();

    expect(logSpy).toHaveBeenCalledWith(log);
  });
});
