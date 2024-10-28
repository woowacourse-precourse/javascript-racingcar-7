import { Console } from '@woowacourse/mission-utils';
import { printWinners } from '../src/utils/printWinners';
import Car from '../src/models/Car';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    print: jest.fn(),
  },
}));

describe('printWinners 함수 테스트', () => {
  test('우승자가 올바르게 출력되는지 확인', () => {
    const car1 = new Car('pobi');
    const car2 = new Car('woni');

    printWinners([car1, car2]);

    expect(Console.print).toHaveBeenCalledWith('최종 우승자 : pobi,woni');
  });
});
