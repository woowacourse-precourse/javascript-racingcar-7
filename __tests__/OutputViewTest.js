import OutputView from '../src/views/OutputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('출력 기능 테스트', () => {
  test('차수별 실행 결과 출력 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const cars = [
      { getName: () => 'free', getDistance: () => 3 },
      { getName: () => 'woowa', getDistance: () => 5 },
    ];

    // when
    OutputView.printRountResult(cars);

    // then
    expect(logSpy).toHaveBeenCalledWith('free : ---');
    expect(logSpy).toHaveBeenCalledWith('woowa : -----');
    expect(logSpy).toHaveBeenCalledWith('');
  });

  test('최종 우승자 출력 테스트', () => {
    // given
    const logSpy = getLogSpy();
    const winners = ['free', 'woowa'];

    // when
    OutputView.printWinner(winners);

    // then
    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : free, woowa');
  });
});
