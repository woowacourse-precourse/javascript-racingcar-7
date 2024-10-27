import { OUTPUT_MESSAGES, CAR_NAME_VALIDATION_ERROR, RACE_COUNT_VALIDATION_ERROR, RACE_MAX_NUM } from '../src/constants/constants.js';
import parseStringToArray from '../src/utils/parseStringToArray';
import CarNameValidations from '../src/validations/CarNameValidations';
import RaceCountValidations from '../src/validations/RaceCountValidations.js';

const MOCK_ERROR_PREFIX = OUTPUT_MESSAGES.ERROR;

jest.mock('../src/view/OutputView.js', () => ({
  printErrorMessage: jest.fn((errorMessage) => {
    throw new Error(`${MOCK_ERROR_PREFIX} ${errorMessage}`);
  })
}));

describe('단위 테스트: 입력 값 유효성 검증', () => {
  describe('parseStringToArray', () => {
    // given
    it.each([
      ['기본 값인 경우', 'a,b,c', ['a', 'b', 'c']],
      ['빈 값인 경우', '', ['']],
      ['값이 하나인 경우', 'a', ['a']],
      ['공백 포함한 값인 경우', ' a , b , c ', ['a', 'b', 'c']]
    ])('%s', (_, input, expected) => {
      // when
      const parsedArray = parseStringToArray(input);

      // then
      expect(parsedArray).toEqual(expected);
    });
  });

  describe('CarNameValidations', () => {
    // given
    it.each([
      ['빈 값인 경우', '', CAR_NAME_VALIDATION_ERROR.IS_EMPTY],
      ['공백만 있는 값인 경우', '    ', CAR_NAME_VALIDATION_ERROR.IS_EMPTY],
      ['자동차 이름이 없는 경우', 'a,b,,d', CAR_NAME_VALIDATION_ERROR.IS_EMPTY],
      ['자동차 이름 길이가 5를 초과하는 경우', 'abcdef,b,c', CAR_NAME_VALIDATION_ERROR.IS_TOO_LONG],
      ['중복 이름 있는 경우', 'a,b,a', CAR_NAME_VALIDATION_ERROR.IS_DUPLICATE],
    ])('%s', (_, input, expectedError) => {
      // when
      const parsedArray = parseStringToArray(input);

      // then
      expect(() => CarNameValidations(parsedArray)).toThrow(`${MOCK_ERROR_PREFIX} ${expectedError}`);
    });
  });

  describe('RaceCountValidations', () => {
    // given
    it.each([
      ['문자 또는 문자열인 경우', 'abc', RACE_COUNT_VALIDATION_ERROR.IS_NOT_NUM],
      ['숫자 중간에 공백이 포함된 경우', '1 2', RACE_COUNT_VALIDATION_ERROR.IS_NOT_NUM],
      ['음수인 경우', '-1', RACE_COUNT_VALIDATION_ERROR.IS_NOT_POSITIVE_INTEGER],
      ['빈 값인 경우', '', RACE_COUNT_VALIDATION_ERROR.IS_NOT_POSITIVE_INTEGER],
      ['공백만 있는 값인 경우', '    ', RACE_COUNT_VALIDATION_ERROR.IS_NOT_POSITIVE_INTEGER],
      ['최대 시도 횟수를 초과한 경우', (RACE_MAX_NUM + 1).toString(), RACE_COUNT_VALIDATION_ERROR.IS_EXCEEDING_MAX],
    ])('%s', (_, input, expectedError) => {
      // when & then
      expect(() => RaceCountValidations(input)).toThrow(`${MOCK_ERROR_PREFIX} ${expectedError}`);
    });
  });
});