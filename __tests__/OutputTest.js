import { Console } from '@woowacourse/mission-utils';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('실행 결과 출력 테스트', () => {
  test('경주에 참여 중인 자동차 이름과 현재까지의 전진 횟수를 출력할 수 있다.', () => {
    const [carName, forwardCount] = ['minji', 3];
    const expectedLog = 'minji : ---';
    const logSpy = getLogSpy();

    OutputView.printCurrentCarInfo(carName, forwardCount);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(expectedLog));
  });
});
