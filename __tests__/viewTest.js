import { getLogSpy } from '../src/utils/testUtils.js';
import view from '../src/view.js';

describe('view 객체 테스트', () => {
  test.each([
    { name: 'a', progress: 0, log: 'a : ' },
    { name: 'a', progress: 3, log: 'a : ---' },
  ])('진행 결과 출력 기능 테스트', ({ name, progress, log }) => {
    // when
    const logSpy = getLogSpy();
    view.printProgress(name, progress);

    // then
    expect(logSpy).toHaveBeenCalledWith(log);
  });
  test.each([
    { winners: ['a'], log: '최종 우승자 : a' },
    { winners: ['a', 'b'], log: '최종 우승자 : a, b' },
  ])('최종 우승자 출력 기능 테스트', ({ winners, log }) => {
    // when
    const logSpy = getLogSpy();
    view.printWinner(winners);

    // then
    expect(logSpy).toHaveBeenCalledWith(log);
  });
});
