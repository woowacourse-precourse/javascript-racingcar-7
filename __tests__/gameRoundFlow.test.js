import App from '../src/App.js';
import {
  mockQuestions,
  mockRandoms,
  getLogSpy,
} from '../__mocks__/mockUtils.js';
import { MESSAGES } from '../src/constants.js';

describe('자동차 경주: 게임 진행 및 결과 출력 테스트', () => {
  test('입력 횟수만큼 라운드가 반복된 후 최종 승자가 출력된다', async () => {
    // given
    const inputs = ['minda,marge,lisa', '3'];
    const randomValues = [5, 3, 4, 6, 2, 7, 9, 2, 8];
    const expectedLogs = [
      'minda : -',
      'marge : ',
      'lisa : -',
      '\n',
      'minda : --',
      'marge : ',
      'lisa : --',
      '\n',
      'minda : ---',
      'marge : ',
      'lisa : ---',
      '\n',
      `${MESSAGES.WINNER_MESSAGE}minda, lisa`,
    ];

    mockQuestions(inputs);
    mockRandoms(randomValues);

    const logSpy = getLogSpy();

    // when
    const app = new App();
    await app.run();

    // then
    expectedLogs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
