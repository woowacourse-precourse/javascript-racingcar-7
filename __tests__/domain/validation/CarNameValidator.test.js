import CarNameValidator from '../../../src/domain/validation/CarNameValidator.js';

describe('CarNameValidator 테스트', () => {
  describe('validateCarNameLength 메서드 테스트', () => {
    test('이름이 5자를 초과할 경우에 대한 에러 발생 여부 확인', () => {
      // given
      const invalidNames = ['pobishop', 'croongman', 'abcdefg'];

      // when & then
      invalidNames.forEach((name) => {
        expect(() => CarNameValidator.validateCarNameLength(name))
          .toThrow('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
      });
    });

    test('이름이 빈 문자열일 경우에 대한 에러 발생 여부 확인', () => {
      // given
      const emptyName = '';

      // when & then
      expect(() => CarNameValidator.validateCarNameLength(emptyName))
        .toThrow('[ERROR] 자동차 이름은 1자 이상 5자 이하여야 합니다.');
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
});
