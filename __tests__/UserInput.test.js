/* eslint-disable*/

import App from '../src/App.js';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockGetUserInputs = inputs => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('사용자 입력 테스트', () => {
  test('유효한 사용자 입력 테스트', async () => {
    const inputs = ['pobi, woni', '5'];
    const logs = ['pobi, woni', '5']; // 기대하는 로그 메시지
    const logSpy = getLogSpy();
    mockGetUserInputs(inputs);

    const app = new App();
    await app.run();

    logs.forEach(log => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });
});
