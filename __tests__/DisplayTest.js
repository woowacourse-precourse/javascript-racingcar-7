import { Console } from '@woowacourse/mission-utils';
import Display from '../src/Display.js';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('Display 메서드 테스트', () => {
  test.each([
    [1, true],
    [2, false],
    [5, false],
  ])('실행 결과 헤더 출력이 동작하는지 테스트', (round, isCalled) => {
    const HEADER = '실행 결과';
    const headerSpy = getLogSpy();

    Display.showRoundResultHeader(round);

    if (isCalled) {
      expect(headerSpy).toHaveBeenCalledWith(HEADER);
    } else {
      expect(headerSpy).not.toHaveBeenCalled();
    }
  });

  test('라운드 결과를 형식에 맞게 출력하는지 테스트', () => {
    const roundResult = { name: 'woowa', distance: 3 };
    const EXPECTED_LOG = 'woowa : ---';
    const roundResultSpy = getLogSpy();

    Display.showDistanceGraph(roundResult);

    expect(roundResultSpy).toHaveBeenCalledWith(EXPECTED_LOG);
  });
});
