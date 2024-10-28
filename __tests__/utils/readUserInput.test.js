import { readUserInput } from '../../src/utils/readUserInput.js';
import { Console } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('readUserInput', () => {
  const message = '입력 테스트';

  it('올바른 입력일 경우 입력을 반환한다.', async () => {
    const inputs = ['입력'];
    mockQuestions(inputs);

    const result = await readUserInput(message);

    expect(result).toBe('입력');
    expect(Console.readLineAsync).toHaveBeenCalledWith(`${message}\n`);
  });

  it('벨리데이터에 올바른 입력일 경우 입력을 반환한다.', async () => {
    const inputs = ['입력'];
    mockQuestions(inputs);

    const validators = [
      (input) => input.length > 0,
      (input) => input === '입력',
    ];

    const result = await readUserInput(message, validators);

    expect(result).toBe('입력');
    expect(Console.readLineAsync).toHaveBeenCalledWith(`${message}\n`);
  });

  it('유효하지 않은 입력일 경우 오류를 던진다.', async () => {
    const inputs = ['invalid input'];
    mockQuestions(inputs);

    const validators = [
      (input) => input.length > 0,
      (input) => input === '입력',
    ];

    await expect(readUserInput(message, validators)).rejects.toThrow(
      '잘못된 입력이에요.'
    );
    expect(Console.readLineAsync).toHaveBeenCalledWith(`${message}\n`);
  });

  it('빈 입력일 경우 오류를 던진다.', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const validators = [(input) => input.length > 0];

    await expect(readUserInput(message, validators)).rejects.toThrow(
      '잘못된 입력이에요.'
    );
    expect(Console.readLineAsync).toHaveBeenCalledWith(`${message}\n`);
  });
});
