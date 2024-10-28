import { Console } from '@woowacourse/mission-utils';
import { printWinner } from './printWinner';

test('최종 우승자 : pobi, kim 을 출력한다.', () => {
  const spyFn = jest.spyOn(Console, 'print');

  printWinner(['pobi', 'kim']);

  expect(spyFn).toHaveBeenCalledWith('최종 우승자 : pobi, kim');
});
