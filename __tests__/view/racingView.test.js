import { Console } from '@woowacourse/mission-utils';
import RacingView from '../../src/view/racingView';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('RacingView', () => {
  beforeEach(() => {
    Console.print.mockClear();
  });

  test('printRaceStatus() 호출 시 자동차 이름과 위치 문자열을 출력한다', () => {
    const mockCars = [
      {
        getName: jest.fn(() => 'Car1'),
        getPositionString: jest.fn(() => '--'),
      },
      {
        getName: jest.fn(() => 'Car2'),
        getPositionString: jest.fn(() => '---'),
      },
    ];

    RacingView.printRaceStatus(mockCars);

    expect(Console.print).toHaveBeenCalledWith('Car1 : --');
    expect(Console.print).toHaveBeenCalledWith('Car2 : ---');
    expect(Console.print).toHaveBeenCalledWith('');
  });

  test('printWinners() 호출 시 우승자 이름을 출력한다', () => {
    const winners = ['Car1', 'Car3'];
    RacingView.printWinners(winners);
    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : Car1, Car3');
  });

  test('printError() 호출 시 에러 메시지를 출력한다', () => {
    const errorMessage = '잘못된 입력입니다.';
    RacingView.printError(errorMessage);
    expect(Console.print).toHaveBeenCalledWith('[ERROR] 잘못된 입력입니다.');
  });
});
