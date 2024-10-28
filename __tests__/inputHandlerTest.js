import { getNameInput, getRoundCountInput } from '../src/utils/inputHandler.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('getNameInput 함수 테스트', () => {
  test('사용자가 입력한 이름 문자열을 배열로 반환하는지 확인', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,woni,jun');

    const result = await getNameInput();

    expect(result).toEqual(['pobi', 'woni', 'jun']);
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
  });
});

describe('getRoundCountInput 함수 테스트', () => {
  test('사용자가 입력한 시도 횟수를 숫자로 반환하는지 확인', async () => {
    Console.readLineAsync.mockResolvedValueOnce('5');

    const result = await getRoundCountInput();

    expect(result).toBe(5);
    expect(Console.readLineAsync).toHaveBeenCalledWith(
      '시도할 횟수는 몇 회인가요?\n'
    );
  });
});
