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
      const inputs = ['minji,hyuk'];
      const expectedInput = 'minji,hyuk';

      mockQuestions(inputs);

      const carNames = await InputView.readCarNames();

      expect(carNames).toEqual(expectedInput);
    });

    describe('자동차 이름 입력 예외 테스트', () => {
      test('자동차 이름이 6자 이상인 경우 에러를 발생한다.', () => {
        const input = 'minhyuk';

        expect(() => validateCarName(input)).toThrow('[ERROR]');
      });

      test('자동차 이름이 0자인 경우 에러를 발생한다.', () => {
        const input = '';

        expect(() => validateCarName(input)).toThrow('[ERROR]');
      });
    });
  });

  describe('이동 시도 횟수 입력 테스트', () => {
    test('사용자에게 경주 시 이동할 시도 횟수를 입력 받을 때 올바른 프롬프트를 나타낸다.', async () => {
      const expectedPrompt = '시도할 횟수는 몇 회인가요?';

      mockQuestions();
      await InputView.readRoundCount();

      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedPrompt);
    });

    test('사용자에게 경주 시 이동할 시도 횟수를 입력받는다.', async () => {
      const input = [3];
      const expectedInput = 3;

      mockQuestions(input);

      const roundCount = await InputView.readRoundCount();

      expect(roundCount).toEqual(expectedInput);
    });

    describe('이동 시도 횟수 입력 예외 테스트', () => {
      test('이동 시도 횟수가 숫자 형태가 아닌 값일 때 에러를 발생한다.', () => {
        const input = 'one';

        expect(() => validateRoundCount(input)).toThrow('[ERROR]');
      });

      test('이동 시도 횟수에 숫자 형태가 아닌 값이 포함될 때 에러를 발생한다.', () => {
        const input = '3!';

        expect(() => validateRoundCount(input)).toThrow('[ERROR]');
      });
    });
  });
});
