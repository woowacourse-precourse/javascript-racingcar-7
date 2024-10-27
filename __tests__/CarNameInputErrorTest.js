import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';

describe('입력 예외 처리 테스트(이름)', () => {
  test('이름 제한을 초과함', async () => {
    // given
    const inputs = ['pobi,javaji'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('이름을 적지않음', async () => {
    // given
    const inputs = [''];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });

  test('중간에 이름을 빼먹음', async () => {
    // given
    const inputs = ['min,,je'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
