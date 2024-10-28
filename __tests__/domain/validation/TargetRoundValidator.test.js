import TargetRoundValidation from '../../../src/domain/validation/TargetRoundValidator.js';
import ERROR from '../../../src/constants/Error.js';

describe('TargetRoundValidation 테스트', () => {
  describe('validateTargetRound 메서드 테스트', () => {
    test('유효한 라운드 수 검증 확인', () => {
      // given
      const validRounds = [1, 5, 10];

      // when & then
      validRounds.forEach((round) => {
        expect(() => TargetRoundValidation.validateTargetRound(round))
          .not.toThrow();
      });
    });

    test('정수가 아닌 경우 예외 발생 확인', () => {
      // given
      const invalidRounds = [1.5, 2.7, 'abc'];

      // when & then
      invalidRounds.forEach((round) => {
        expect(() => TargetRoundValidation.validateTargetRound(round))
          .toThrow(ERROR.TARGET_ROUND_NOT_INTEGER);
      });
    });

    test('0 이하인 경우 예외 발생 확인', () => {
      // given
      const invalidRounds = [0, -1, -5];

      // when & then
      invalidRounds.forEach((round) => {
        expect(() => TargetRoundValidation.validateTargetRound(round))
          .toThrow(ERROR.TARGET_ROUND_MIN);
      });
    });
  });
});
