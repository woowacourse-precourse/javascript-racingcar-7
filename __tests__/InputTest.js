import App from '../src/App.js';

describe('입력', () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test('자동차 이름은 쉼표(,)를 기준으로 구분한다.', () => {
    const INPUT = 'pobi,woni,jun';
    const NAMES = ['pobi', 'woni', 'jun'];

    expect(app.splitCarName(INPUT)).toEqual(NAMES);
  });
});
