import { Console } from '@woowacourse/mission-utils';
import Input from '../src/components/Input.js';

describe('Input 클래스 테스트', () => {
  beforeAll(() => {
    Console.readLineAsync = jest.fn();
  });

  test('자동차 이름과 게임 반복 횟수를 올바르게 입력받아 반환한다.', async () => {
    const mockNames = 'car1,car2,car3';
    const mockRepetition = '5';

    Console.readLineAsync
      .mockResolvedValueOnce(mockNames)
      .mockResolvedValueOnce(mockRepetition);

    const result = await Input.get();

    expect(result.names).toBe(mockNames);
    expect(result.repetitionString).toBe(mockRepetition);
  });
});
