import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../src/App.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('자동차 이름 입력 받기', () => {
  test('자동차 이름 입력 값이 빈 값이면 에러를 던진다.', async () => {
    const carNamesInput = [''];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력 값이 중복되면 에러를 던진다.', async () => {
    const carNamesInput = ['pobi, pobi, jinny'];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
