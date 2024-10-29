import {
  carNameParser,
  validateCarNames,
  validateTryCount,
  validateCarNameLength,
  validateNoEmptyName,
  validateNoDuplicates,
  validateIsNumber,
  validateIsPositive,
} from '../src/utils/index.js';
import { ERROR_MESSAGES } from '../src/constants/index.js';

describe('문자열 파싱 테스트', () => {
  test('쉼표로 구분된 문자열을 배열로 변환한다', () => {
    expect(carNameParser('soeun,somin,soso')).toEqual([
      'soeun',
      'somin',
      'soso',
    ]);
  });

  test('앞뒤 공백이 있는 이름일경우 공백을 제거하여 배열로 변환한다.', () => {
    expect(carNameParser('soeun    ,    somin  , soso  ')).toEqual([
      'soeun',
      'somin',
      'soso',
    ]);
  });

  test('연속된 쉼표가 있을 경우 빈 문자열을 포함하여 반환한다', () => {
    expect(carNameParser('soeun, ,somin')).toEqual(['soeun', '', 'somin']);
  });
});

describe('자동차 이름 배열의 유효성 검사', () => {
  test('유효한 자동차 이름일 경우 에러가 발생하지 않는다. ', () => {
    expect(() => validateCarNames(['soeun', 'somin', 'soso'])).not.toThrow();
  });

  test('길이가 5를 초과하는 자동차가 있을 경우 에러를 발생시킨다.', () => {
    expect(() => validateCarNames(['soeunsoeun', 'soeun'])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG,
    );
  });
  test('빈 문자열이 있을 경우 에러를 발생시킨다.', () => {
    expect(() => validateCarNames(['soeun', ''])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME,
    );
  });
  test('중복된 이름이 있을 경우 에러를 발생시킨다.', () => {
    expect(() => validateCarNames(['soeun', 'soeun'])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE,
    );
  });
});

describe('자동차 이름 길이 검사', () => {
  test('모든 이름이 5자 이하면 에러가 발생하지 않는다', () => {
    expect(() => validateCarNameLength(['soeun', 'so'])).not.toThrow();
  });

  test('5자를 초과하는 이름이 있으면 에러가 발생한다', () => {
    expect(() => validateCarNameLength(['soeunsoeun'])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.TOO_LONG,
    );
  });
});

describe('자동차 배열에 빈 문자열 검사', () => {
  test('빈 문자열이 없으면 에러가 발생하지 않는다', () => {
    expect(() => validateNoEmptyName(['soeun', 'so'])).not.toThrow();
  });

  test('빈 문자열이 있으면 에러가 발생한다', () => {
    expect(() => validateNoEmptyName(['soeun', ''])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.NO_NAME,
    );
  });
});

describe('자동차 이름 중복 검사', () => {
  test('중복된 이름이 없으면 에러가 발생하지 않는다', () => {
    expect(() => validateNoDuplicates(['soeun', 'somin'])).not.toThrow();
  });

  test('중복된 이름이 있으면 에러가 발생한다', () => {
    expect(() => validateNoDuplicates(['soeun', 'soeun'])).toThrow(
      ERROR_MESSAGES.CAR_ERROR_MESSAGES.DUPLICATE,
    );
  });
});

describe('레이싱 횟수 유효성 검사', () => {
  test('유효한 시도 횟수는 에러가 발생하지 않는다', () => {
    expect(() => validateTryCount('3')).not.toThrow();
  });

  test('숫자가 아닌 입력은 에러가 발생한다', () => {
    expect(() => validateTryCount('abc')).toThrow(
      ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER,
    );
  });

  test('음수 입력은 에러가 발생한다', () => {
    expect(() => validateTryCount('-1')).toThrow(
      ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE,
    );
  });
});

describe('숫자 검사', () => {
  test.each([
    ['1', false],
    ['abc', true],
    ['1.5', false],
    ['0', false],
  ])('input: %s \n result: %s', (input, result) => {
    if (result) {
      expect(() => validateIsNumber(input)).toThrow(
        ERROR_MESSAGES.COUNT_ERROR_MESSAGES.ONLY_NUMBER,
      );
    } else {
      expect(() => validateIsNumber(input)).not.toThrow();
    }
  });
});

describe('양수 검사', () => {
  test.each([
    ['1', false],
    ['0', true],
    ['-1', true],
    ['1.5', false],
  ])('input: %s \n result: %s', (input, result) => {
    if (result) {
      expect(() => validateIsPositive(input)).toThrow(
        ERROR_MESSAGES.COUNT_ERROR_MESSAGES.NOT_NEGATIVE,
      );
    } else {
      expect(() => validateIsPositive(input)).not.toThrow();
    }
  });
});
