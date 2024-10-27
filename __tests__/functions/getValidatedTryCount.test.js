import getValidatedTryCount from '../../src/functions/getValidatedTryCount';
import { getUserInput } from '../../src/utils/ioModule';
import { ERROR_MESSAGE } from '../../src/constants/messages';

jest.mock('../../src/utils/ioModule', () => ({
  getUserInput: jest.fn(),
}));

const tryCountTestCases = [
  ['유효한 시도 횟수를 입력한 경우', '1', 1, false],
  ['유효한 시도 횟수를 입력한 경우', '123', 123, false],
  ['유효한 시도 횟수를 입력한 경우', '1000', 1000, false],
  [
    '유효하지 않은 시도 횟수를 입력한 경우',
    '1001',
    ERROR_MESSAGE.INVALID_NUMBER_RANGE,
    true,
  ],
  [
    '유효하지 않은 시도 횟수를 입력한 경우',
    '0',
    ERROR_MESSAGE.INVALID_NUMBER_RANGE,
    true,
  ],
  [
    '유효하지 않은 시도 횟수를 입력한 경우',
    '123a4',
    ERROR_MESSAGE.INVALID_NUMBER_INPUT,
    true,
  ],
  ['유효하지 않은 시도 횟수를 입력한 경우', '', ERROR_MESSAGE.NULL_INPUT, true],
];

describe('getValidatedTryCount 함수 테스트', () => {
  describe.each(tryCountTestCases)(
    '%s',
    (description, input, expected, expectedError) => {
      test(`${expected} : ${input}`, async () => {
        getUserInput.mockResolvedValue(input);
        if (expectedError) {
          await expect(getValidatedTryCount()).rejects.toThrow(expected);
        } else {
          const result = await getValidatedTryCount();
          expect(result).toEqual(expected);
        }
      });
    },
  );
});
