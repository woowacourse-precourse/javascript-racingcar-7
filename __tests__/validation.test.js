import { validateCarNames } from '../src/services/validation.js';
import { ERROR_MESSAGES } from '../src/constant.js';

describe('사용자 입력 검증', () => {
  describe('자동차 이름 입력 검증', () => {
    test('자동차 이름 입력은 공백일 수 없다', () => {
      expect(() => validateCarNames('')).toThrow(ERROR_MESSAGES.emptyCarName);
    });

    test('쉼표(,) 이외의 유효하지 않은 구분자는 자동차 이름 입력에 포함될 수 없다', () => {
      expect(() => validateCarNames('car1,car2;car3')).toThrow(
        ERROR_MESSAGES.invalidDelimiter
      );
    });

    test('쉼표(,) 이외의 특수문자, 공백을 자동차 이름 입력에 포함할 수 없다', () => {
      expect(() => validateCarNames('car@1,car2')).toThrow(
        ERROR_MESSAGES.invalidDelimiter
      );
    });

    test('자동차 이름이 1~5자 이하의 문자로 구성되지 않은 경우 에러를 던져야 한다', () => {
      expect(() => validateCarNames('car1,car2,carLongName')).toThrow(
        ERROR_MESSAGES.invalidCarNameFormat
      );
    });

    test('자동차 이름이 유효한 형식일 경우 에러를 발생시키지 않아야 한다', () => {
      expect(() => validateCarNames('car1,car2')).not.toThrow();
    });
  });
});
