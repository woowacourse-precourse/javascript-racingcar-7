import Validator from '../../../src/application/utils/InputValidator.js';

describe('InputValidator class 테스트', () => {

  describe('validateInputIsNull 메소트 테스트', () => {
    test('Input 값이 null 혹은 빈칸일 경우에 대한 예외 빌생 확인', () => {
      const inputs = [null, ''];
      inputs.forEach((input) => {
        expect(() => Validator.validateInputIsNull(input)).toThrow('[ERROR]');
      });
    });
  });
});
