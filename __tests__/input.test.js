import { Console } from '@woowacourse/mission-utils';
import { getCarNames, getRoundCount } from '../src/services/input.js';
import { ERROR_MESSAGES } from '../src/constant.js';

jest.mock('@woowacourse/mission-utils');

describe('사용자 입력', () => {
  describe('자동차 이름 입력', () => {
    test('유효한 자동차 이름을 입력하면 자동차 이름 배열을 반환한다', async () => {
      const input = 'car1,car2';
      Console.readLineAsync.mockResolvedValueOnce(input);

      const result = await getCarNames();

      expect(result).toEqual(['car1', 'car2']);
    });

    test('유효하지 않은 형식의 자동차 이름을 입력하면 에러를 발생시킨다', async () => {
      const input = 'car123,car456';
      Console.readLineAsync.mockResolvedValueOnce(input);

      await expect(getCarNames()).rejects.toThrow(
        ERROR_MESSAGES.invalidCarNameFormat
      );
    });
  });

  describe('시도 횟수 입력', () => {
    test('유효한 시도 횟수를 입력하면 숫자를 반환한다', async () => {
      const input = '5';
      Console.readLineAsync.mockResolvedValueOnce(input);

      const result = await getRoundCount();

      expect(result).toBe(5);
    });

    test('유효하지 않은 형식의 시도 횟수를 입력하면 에러를 발생시킨다', async () => {
      const input = '-1';
      Console.readLineAsync.mockResolvedValueOnce(input);

      await expect(getRoundCount()).rejects.toThrow(
        ERROR_MESSAGES.invalidRoundCountFormat
      );
    });
  });
});
