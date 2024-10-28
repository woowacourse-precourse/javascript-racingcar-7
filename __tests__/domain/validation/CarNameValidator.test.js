import CarNameValidator from '../../../src/domain/validation/CarNameValidator.js';
import ERROR from '../../../src/constants/Error.js';

describe('CarNameValidator 테스트', () => {
  describe('validateCarNameLength 메서드 테스트', () => {
    test('이름이 5자를 초과할 경우에 대한 에러 발생 여부 확인', () => {
      // given
      const invalidNames = ['pobishop', 'croongman', 'abcdefg'];

      // when & then
      invalidNames.forEach((name) => {
        expect(() => CarNameValidator.validateCarNameLength(name))
          .toThrow(ERROR.CAR_NAME_LENGTH);
      });
    });

    test('이름이 빈 문자열일 경우에 대한 에러 발생 여부 확인', () => {
      // given
      const emptyName = '';

      // when & then
      expect(() => CarNameValidator.validateCarNameLength(emptyName))
        .toThrow(ERROR.CAR_NAME_LENGTH);
    });

    test('1자 이상 5자 이하의 정상적인 이름에 대한 에러 발생 여부 확인', () => {
      // given
      const validNames = ['pobi', 'crong', 'abc', 'a', 'five5'];

      // when & then
      validNames.forEach((name) => {
        expect(() => CarNameValidator.validateCarNameLength(name))
          .not.toThrow();
      });
    });
  });

  describe('validateCarNamesDuplication 메서드 테스트', () => {
    test('중복된 이름이 있을 경우 에러가 발생한다', () => {
      // given
      const duplicateNames = ['pobi', 'crong', 'pobi'];

      // when & then
      expect(() => CarNameValidator.validateCarNamesDuplication(duplicateNames))
        .toThrow(ERROR.CAR_NAME_DUPLICATE);
    });

    test('중복된 이름이 없는 경우 검증을 통과한다', () => {
      // given
      const uniqueNames = ['pobi', 'crong', 'jun'];

      // when & then
      expect(() => CarNameValidator.validateCarNamesDuplication(uniqueNames))
        .not.toThrow();
    });
  });
});
