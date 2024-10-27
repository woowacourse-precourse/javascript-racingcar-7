import { getLogSpy } from '../src/utils/testUtils.js';
import view from '../src/view.js';

describe('view 객체 테스트', () => {
  test.each([
    { name: 'a', progress: 0, log: 'a : ' },
    { name: 'a', progress: 3, log: 'a : ---' },
  ])('진행 결과 출력 기능 테스트', ({ name, progress, log }) => {
    const logSpy = getLogSpy();
    view.printProgress(name, progress);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
  test.each([
    { winners: ['a'], log: '최종 우승자 : a' },
    { winners: ['a', 'b'], log: '최종 우승자 : a, b' },
  ])('최종 우승자 출력 기능 테스트', ({ winners, log }) => {
    const logSpy = getLogSpy();
    view.printWinner(winners);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
});
