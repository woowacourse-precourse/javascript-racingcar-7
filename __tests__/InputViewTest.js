import { Console } from '@woowacourse/mission-utils';
import { InputView } from '../src/view/InputView';
import { INPUT } from '../src/constant';

Console.readLineAsync = jest.fn();

describe('InputView 테스트', () => {
  let inputView;
  beforeEach(() => {
    inputView = new InputView();
  });

  test('자동차 이름 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValue('pobi,woni,yeongi');

    const carNames = await inputView.carNames();

    expect(carNames).toEqual('pobi,woni,yeongi');
    expect(Console.readLineAsync).toHaveBeenCalledWith(INPUT.CAR_NAMES);
  });

  test('시도 횟수 입력 받기', async () => {
    Console.readLineAsync.mockResolvedValue('5');

    const tryNumber = await inputView.tryNumber();

    expect(tryNumber).toEqual('5');
    expect(Console.readLineAsync).toHaveBeenCalledWith(INPUT.TRY_NUMBER);
  });
});
