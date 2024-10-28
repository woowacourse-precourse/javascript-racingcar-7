import { InputView, OutputView } from '../src/views/index.js';
import { Console } from '@woowacourse/mission-utils';

jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
    print: jest.fn(),
  },
}));

describe('Views', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('InputView', () => {
    it('Console.readLineAsync를 올바른 메시지로 호출하고 입력을 반환합니다', async () => {
      const mockMessage = 'Enter your input: ';
      const mockInput = 'test input';
      Console.readLineAsync.mockResolvedValue(mockInput);
      const input = await InputView.readInput(mockMessage);
      expect(Console.readLineAsync).toHaveBeenCalledWith(mockMessage);
      expect(input).toBe(mockInput);
    });
  });

  describe('OutputView', () => {
    it('Console.print를 올바른 결과 메시지로 호출합니다', () => {
      const result = 'Operation successful';
      OutputView.printResult(result);
      expect(Console.print).toHaveBeenCalledWith(result);
    });

    it('Console.print를 올바른 오류 메시지로 호출합니다', () => {
      const errorMessage = 'An error occurred';
      OutputView.printError(errorMessage);
      expect(Console.print).toHaveBeenCalledWith(errorMessage);
    });
  });
});
