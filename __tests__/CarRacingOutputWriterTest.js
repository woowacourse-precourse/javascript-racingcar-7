import CarRacingOutputWriter from '../src/classes/CarRacingOutputWriter';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('CarRacingOutputWriter', () => {
  test('printStartMessage: 라운드 결과 출력 안내 메시지 출력', () => {
    CarRacingOutputWriter.printStartMessage();
    expect(Console.print).toHaveBeenCalledWith('\n실행결과');
  });

  test('printRoundResults: 각 자동차의 진행 상황을 출력', () => {
    const cars = [{ name: 'pobi', distance: 3 }, { name: 'jun', distance: 2 }];
    CarRacingOutputWriter.printRoundResults(cars);
    expect(Console.print).toHaveBeenCalledWith('pobi : ---\njun : --\n');
  });

  test('printWinners: 우승자를 출력', () => {
    CarRacingOutputWriter.printWinners(['pobi', 'jun']);
    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi, jun');
  });
});
