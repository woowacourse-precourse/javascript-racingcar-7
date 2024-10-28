import { MissionUtils } from '@woowacourse/mission-utils';
import Race from '../../src/Race.js';
import { TRYNUMBER_ERROR } from '../../src/util/constant.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('시도 횟수 입력 유닛테스트', () => {
  const race = new Race();

  const TRYNUMBER_ERROR_CASES = [
    [['asdf'], TRYNUMBER_ERROR.NOT_NUMBER],
    [['123'], TRYNUMBER_ERROR.NOT_OVER_50],
    [[''], TRYNUMBER_ERROR.NOT_BLANK],
  ];

  test.each(TRYNUMBER_ERROR_CASES)(
    'processTryNumber 메서드 에러 테스트',
    async (inputArray, errorMessage) => {
      mockQuestions(inputArray);

      await expect(race.processTryNumber()).rejects.toThrow(errorMessage);
    }
  );

  const TRYNUMBER_PASS_CASES = [[['3']], [['50']]];

  test.each(TRYNUMBER_PASS_CASES)(
    'processTryNumber 메서드 통과 테스트',
    async (inputArray) => {
      mockQuestions(inputArray);

      await expect(race.processTryNumber()).resolves.not.toThrow();
    }
  );
});
