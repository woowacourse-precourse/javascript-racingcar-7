import getValidatedCarNames from '../../src/functions/getValidatedCarNames';
import { getUserInput } from '../../src/utils/ioModule';
import { ERROR_MESSAGE } from '../../src/constants/messages';

jest.mock('../../src/utils/ioModule', () => ({
  getUserInput: jest.fn(),
}));

const carNameTestCases = [
  [
    '유효한 자동차 이름을 입력한 경우',
    'car1,car2,car3',
    ['car1', 'car2', 'car3'],
    false,
  ],
  ['유효한 자동차 이름을 입력한 경우', 'moon', ['moon'], false],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    'car,carA.carC',
    ERROR_MESSAGE.INVALID_CAR_INPUT,
    true,
  ],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    'car,carA,자동차',
    ERROR_MESSAGE.INVALID_CAR_INPUT,
    true,
  ],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    'car,carA,racingCar',
    ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
    true,
  ],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    'car,,race',
    ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH,
    true,
  ],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    'car,hi,car',
    ERROR_MESSAGE.DUPLICATE_NAME,
    true,
  ],
  [
    '유효하지 않은 자동차 이름을 입력한 경우',
    '',
    ERROR_MESSAGE.NULL_INPUT,
    true,
  ],
];

describe('getValidatedCarNames 함수 테스트', () => {
  describe.each(carNameTestCases)(
    '%s',
    (description, input, expected, expectedError) => {
      test(`${expected} : ${input}`, async () => {
        getUserInput.mockResolvedValue(input);
        if (expectedError) {
          await expect(getValidatedCarNames()).rejects.toThrow(expected);
        } else {
          const result = await getValidatedCarNames();
          expect(result).toEqual(expected);
        }
      });
    },
  );
});
