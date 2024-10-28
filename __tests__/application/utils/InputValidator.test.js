import Validator from '../../../src/application/utils/InputValidator.js';
import ERROR from '../../../src/constants/Error.js';

describe('InputValidator class 테스트', () => {
  describe('validateInputIsNull 메소드 테스트', () => {
    test('Input 값이 null 혹은 빈칸일 경우에 대한 예외 발생 여부 확인', () => {
      // given
      const inputs = [null, ''];

      inputs.forEach((input) => {
        // when & then
        expect(() => Validator.validateInputIsNull(input)).toThrow(ERROR.INPUT_IS_NULL);
      });
    });

    test('Input 값이 null 혹은 빈칸이 아닐 경우에 대한 예외 발생 여부 확인', () => {
      // given
      const inputs = ['12', 'pobi,crong,jun', 'asd'];

      inputs.forEach((input) => {
        // when & then
        expect(() => Validator.validateInputIsNull(input)).not.toThrow();
      });
    });
  });
});
