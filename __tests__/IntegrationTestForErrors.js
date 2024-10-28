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

  test('자동차 이름 입력 값이 6자 이상이면 에러를 던진다.', async () => {
    const carNamesInput = ['pobicar, jinny'];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력 값이 문자가 아닐시 에러를 던진다. (이름에 문자표 포함)', async () => {
    const carNamesInput = ['pobi, @jinny'];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력 값이 문자가 아닐시 에러를 던진다. (문자표만)', async () => {
    const carNamesInput = ['pobi, @'];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('자동차 이름 입력 값이 문자가 아닐시 에러를 던진다. (숫자)', async () => {
    const carNamesInput = ['pobi, 123'];
    mockQuestions(carNamesInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});

describe('경기 횟수 입력 받기', () => {
  test('경기 횟수 입력 값이 문자일 시 에러를 던진다.', async () => {
    const racingCountInput = ['One'];
    mockQuestions(racingCountInput);
    const app = new App();

    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
