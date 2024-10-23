// @ts-check
import { Console } from '@woowacourse/mission-utils';
import { input } from '../lib/view';

/**
 *
 * @param {Array<string>} inputs
 */
const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  // @ts-ignore
  Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs.shift());
  });
};

describe('view', () => {
  describe('input', () => {
    it('사용자로 부터 입력받은 값을 반환해야 한다', async () => {
      const inputs = ['pobi, woni, jun'];
      mockQuestions(inputs);

      const result = await input('입력');

      expect(result).toBe('pobi, woni, jun');
    });
  });
});
