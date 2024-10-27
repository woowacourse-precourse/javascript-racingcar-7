import { checkCarName, checkMoveCount } from '../../src/input/validateInput.js';
import ErrorMessage from '../../src/constant/errorMessage.js';

const carNameTestCases = [
  { carNameList: [''], errorMessage: ErrorMessage.CAR_NAME_TOO_SHORT },
  { carNameList: ['이름이너무길다'], errorMessage: ErrorMessage.CAR_NAME_TOO_LONG }
];

describe('checkCarName 테스트', () => {
  test.each(carNameTestCases)(
    'carNameList가 %p일 때, 에러 메시지가 "%s"인지 테스트',
    ({ carNameList, errorMessage }) => {
      expect(() => checkCarName(carNameList)).toThrow(errorMessage);
    }
  );

  test('carNameList가 모든 조건을 통과하는 경우', () => {
    const validCarNames = ['car1', 'auto', 'speed'];
    expect(() => checkCarName(validCarNames)).not.toThrow();
  });
});


const moveCountTestCases = [
  { input: 'abc', errorMessage: ErrorMessage.MOVE_COUNT_NAN },
  { input: 0, errorMessage: ErrorMessage.MOVE_COUNT_NON_POSITIVE },
  { input: -5, errorMessage: ErrorMessage.MOVE_COUNT_NON_POSITIVE },
  { input: 2.5, errorMessage: ErrorMessage.MOVE_COUNT_NOT_INTEGER },
  { input: 9007199254740992 , errorMessage: ErrorMessage.MOVE_COUNT_TOO_LARGE }
];

describe('checkMoveCount 테스트', () => {
  test.each(moveCountTestCases)(
    'moveCount가 %p일 때, 에러 메시지가 "%s"인지 테스트',
    ({ input, errorMessage }) => {
      expect(() => checkMoveCount(input)).toThrow(errorMessage);
    }
  );

  test('유효한 시도 횟수로 에러가 발생하지 않는 경우', () => {
    const validMoveCount = 3;
    expect(() => checkMoveCount(validMoveCount)).not.toThrow();
  });
});
