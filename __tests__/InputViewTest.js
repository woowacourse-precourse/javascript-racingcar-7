import InputView from '../src/View/InputView';
import { mockQuestions } from './ApplicationTest';

describe('InputView', () => {
  test('자동차 이름을 입력받아 배열로 반환한다', async () => {
    // given
    const input = ['pobi,woni'];
    const output = ['pobi', 'woni'];

    mockQuestions(input);

    // when
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    // then
    expect(carNames).toEqual(output);
  });

  test('자동차 이름 입력에서 공백 제거', async () => {
    // given
    const input = ['  pobi , woni  '];
    const output = ['pobi', 'woni'];

    mockQuestions(input);

    // when
    const inputView = new InputView();
    const carNames = await inputView.readCarNames();

    // then
    expect(carNames).toEqual(output);
  });
});
