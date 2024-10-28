import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 예외 테스트', () => {
  test('입력이 없을 경우 테스트', async () => {
    const inputs = [''];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 자동차 이름을 입력해주세요.'
    );
  });

  test('동일한 자동차 이름이 존재할 경우 테스트', async () => {
    const inputs = ['pobi,java,pobi'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 중복된 자동차 이름을 입력할 수 없습니다.'
    );
  });

  test('시도할 횟수가 숫자가 아닌 경우 테스트', async () => {
    const inputs = ['pobi,java', 'two'];
    mockQuestions(inputs);

    const app = new App();

    await expect(app.run()).rejects.toThrow(
      '[ERROR] 경주 시도 횟수를 숫자로 입력해주세요.'
    );
  });
});
