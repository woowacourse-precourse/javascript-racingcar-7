import { mockQuestions } from './ApplicationTest';

describe('InputView', () => {
  test('자동차 이름을 입력받는다', async () => {
    // given
    const input = ['pobi,woni'];
    const output = 'pobi,woni';

    mockQuestions(input);

    // when
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    // then
    expect(carNames).toEqual(output);
  });
});
