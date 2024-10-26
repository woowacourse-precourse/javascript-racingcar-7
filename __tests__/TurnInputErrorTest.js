import App from '../src/App.js';
import { mockQuestions } from './ApplicationTest.js';

describe('입력 예외 처리 테스트(횟수)', () => {
  test('횟수로 문자를 받음', async () => {
    // given
    const inputs = ['min,sung,je', 'hello'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
  test('횟수로 입력값이 없음', async () => {
    // given
    const inputs = ['min,sung,je'];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
