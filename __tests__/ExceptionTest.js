import App from '../src/App.js';
import { mockQuestions } from '../utils/testUtils.js';

describe('예외 케이스', () => {
  test.each([
    ['자동차 이름이 5자를 초과했을 경우', ['carName12,car1', '1']],
    ['자동차 이름이 빈 문자열인 경우', [',car1', '1']],
    ['자동차 이름이 빈 문자열인 경우2', ['car1,car2,,car3', '1']],
    ['자동차 이름이 중복일 경우', ['car1,car1', '2']],
    ['게임 횟수가 0인 경우', ['car1,car12', '0']],
    ['게임 횟수가 숫자가 아닌 경우', ['car1,car12', 'abc']],
    ['게임 횟수가 음수인 경우', ['car1,car12', '-2']],
    ['게임 횟수가 소수인 경우', ['car1,car12', '1.5']],
  ])('%s', async (_testName, inputs) => {
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow('[ERROR]');
  });
});
