import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 경주 에러 테스트', () => {
  test.each([
    ['사용자가 값을 입력하지 않은 경우', ['', '']],
    ['시도하는 횟수를 숫자가 아닌 값을 입력했을 경우', ['pobi,woni', 'sdf']],
    ['시도하는 횟수를 양수가 아닌 값을 입력했을 경우', ['pobi,woni', '-1']],
    ['시도하는 횟수를 정수가 아닌 값을 입력했을 경우', ['pobi,woni', '1.5']],
  ])('%s', async (description, inputs) => {
    mockQuestions(inputs);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
