import { Console } from '@woowacourse/mission-utils';
import InputView from '../src/InputView.js';

const mockQuestions = (inputs = []) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('사용자 입력 테스트', () => {
  describe('자동차 이름 입력 테스트', () => {
    test('사용자에게 경주할 자동차 이름을 입력 받을 때 올바른 프롬프트를 나타낸다.', async () => {
      const expectedPrompt = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';

      mockQuestions();
      await InputView.readCarNames();

      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedPrompt);
    });

    test('사용자에게 경주할 자동차의 이름을 입력받는다.', async () => {
      const input = ['minji'];
      const expectedInput = 'minji';

      mockQuestions(input);

      const carNames = await InputView.readCarNames();

      expect(carNames).toEqual(expectedInput);
    });

    test('사용자에게 경주할 자동차 여러 개의 이름을 입력받는다.', async () => {
      const inputs = ['minji,minhyuk'];
      const expectedInput = 'minji,minhyuk';

      mockQuestions(inputs);

      const carNames = await InputView.readCarNames();

      expect(carNames).toEqual(expectedInput);
    });
  });
});
