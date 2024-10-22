import { MissionUtils } from '@woowacourse/mission-utils';
import User from './User.js';
import { GAME_MESSAGE } from '../constants/messages';

const getReadLineAsync = () => {
  return jest.spyOn(MissionUtils.Console, 'readLineAsync');
};

describe('User', () => {
  let user;
  let readLineAsyncSpy;

  beforeEach(() => {
    user = new User();
    readLineAsyncSpy = getReadLineAsync();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('유저 입력 값 받아오기 readUserInput', () => {
    test('올바른 메시지로 호출하고 입력값을 반환한다', async () => {
      const message = GAME_MESSAGE.START;
      const expectedInput = 'pobi,woni,jun';
      readLineAsyncSpy.mockResolvedValue(expectedInput);

      const result = await user.readUserInput(message);

      expect(readLineAsyncSpy).toHaveBeenCalledWith(message);
      expect(result).toBe(expectedInput);
    });

    test('다양한 입력에 대해 일관된 동작을 보인다', async () => {
      const inputs = [
        'pobi,woni',
        'pobi,woni,jun',
        'pobi,woni,jun,exceptanyone',
      ];

      for (const input of inputs) {
        readLineAsyncSpy.mockResolvedValue(input);
        const result = await user.readUserInput('Any message');
        expect(result).toBe(input);
      }
    });
  });
});
