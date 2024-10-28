import InputView from '../src/views/InputView.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(inputs);
  });
};

describe('입력 기능 테스트', () => {
  test('자동차 이름 입력 받기 테스트', async () => {
    // given
    const input = 'woowa, free, tech';
    mockQuestions(input);

    // when
    const result = await InputView.inputNames();

    // then
    expect(result).toBe(input);
  });

  test('시도 횟수 입력 받기 테스트', async () => {
    // given
    const input = '10';
    mockQuestions(input);

    // when
    const result = await InputView.inputAttempt();

    // then
    expect(result).toBe(input);
  });
});
