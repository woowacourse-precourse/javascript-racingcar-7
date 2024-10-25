import { MissionUtils } from '@woowacourse/mission-utils';
import { ERROR_MESSAGE } from '../src/constant/index.js';
import { readAndValidateCarNames, readAndValidateTryNumber } from '../src/utils/reader.js';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe('입력 테스트', () => {
  const CAR_NAME_TEST_CASES = [
    ['', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_EMPTY],
    [' ', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['123,1 5,1', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_GAP],
    ['dany,dany', ERROR_MESSAGE.CAR_NAME_NOT_ALLOWED_DUPLICATION],
    ['daniel,java,js', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
    ['jun,123456', ERROR_MESSAGE.CAR_NAME_MAX_LENGTH_FIVE],
  ];
  test.each(CAR_NAME_TEST_CASES)('자동차 입력 실패 테스트', async (cars, message) => {
    mockQuestions([cars]);

    await expect(readAndValidateCarNames()).rejects.toThrow(message);
  });

  const TRY_NUMBER_TEST_CASES = [
    ['0', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['1.5', ERROR_MESSAGE.TRY_NUMBER_IS_NOT_INTEGER_ERROR],
    ['-1', ERROR_MESSAGE.TRY_NUMBER_RANGE_ERROR],
    ['-5+6', ERROR_MESSAGE.TRY_NUMBER_TYPE_ERROR],
  ];
  test.each(TRY_NUMBER_TEST_CASES)('이동 할 횟수 입력 실패 테스트', async (tryNumber, message) => {
    mockQuestions([tryNumber]);

    await expect(readAndValidateTryNumber()).rejects.toThrow(message);
  });
});
