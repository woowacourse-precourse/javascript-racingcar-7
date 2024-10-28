import { Console } from '@woowacourse/mission-utils';
import { printDistance } from './printDistance';

test('pobi의 4칸 이동 결과를 출력한다.', () => {
  const spyFn = jest.spyOn(Console, 'print');

  printDistance({ name: 'pobi', distance: 4 });

  expect(spyFn).toHaveBeenCalledWith('pobi : ----');
});
