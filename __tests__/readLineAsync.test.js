import readLineAsync from '../src/utils/readLineAsync';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLine: jest.fn(),
    print: jest.fn(),
  },
}));

describe('readLineAsync 비동기 입력 처리', () => {
  test('올바른 입력값이 resolve되는지 확인합니다.', async () => {
    Console.readLine.mockImplementation((message, callback) => callback('5'));

    const input = await readLineAsync('시도할 횟수를 입력하세요.\n');
    expect(input).toBe('5');
  });

  test('오류가 발생할 경우 reject되는지 확인합니다.', async () => {
    Console.readLine.mockImplementation((message, callback) => {
      throw new Error('[ERROR] 입력 오류');
    });

    await expect(readLineAsync('오류 발생 테스트')).rejects.toThrow('[ERROR] 입력 오류');
  });
});
