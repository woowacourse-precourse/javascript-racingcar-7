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
