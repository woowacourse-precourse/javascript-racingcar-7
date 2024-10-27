import { validateEmpty, validateCarCount, validateDuplicate, validateCarNameLength } from './validator';

describe('자동차 경주 게임 입력값 유효성 검사', () => {
  describe('validateEmpty', () => {
    test('빈 문자열이 입력되면 에러를 던진다', () => {
      expect(() => validateEmpty('')).toThrow('[ERROR] 자동차 이름을 입력해주세요.');
    });

    test('공백만 있는 문자열이 입력되면 에러를 던진다', () => {
      expect(() => validateEmpty('   ')).toThrow('[ERROR] 자동차 이름을 입력해주세요.');
    });

    test('정상적인 입력값은 에러를 던지지 않는다', () => {
      expect(() => validateEmpty('car1')).not.toThrow();
    });
  });

  describe('validateCarCount', () => {
    test('자동차가 1대일 경우 에러를 던진다', () => {
      expect(() => validateCarCount(['car1'])).toThrow('[ERROR] 경주에 참가할 자동차는 2대 이상이어야 합니다.');
    });

    test('자동차가 0대일 경우 에러를 던진다', () => {
      expect(() => validateCarCount([])).toThrow('[ERROR] 경주에 참가할 자동차는 2대 이상이어야 합니다.');
    });

    test('자동차가 2대 이상일 경우 에러를 던지지 않는다', () => {
      expect(() => validateCarCount(['car1', 'car2'])).not.toThrow();
      expect(() => validateCarCount(['car1', 'car2', 'car3'])).not.toThrow();
    });
  });

  describe('validateDuplicate', () => {
    test('중복된 자동차 이름이 있으면 에러를 던진다', () => {
      expect(() => validateDuplicate(['car1', 'car1'])).toThrow('[ERROR] 중복된 자동차 이름이 있습니다.');
      expect(() => validateDuplicate(['car1', 'car2', 'car1'])).toThrow('[ERROR] 중복된 자동차 이름이 있습니다.');
    });

    test('중복된 자동차 이름이 없으면 에러를 던지지 않는다', () => {
      expect(() => validateDuplicate(['car1', 'car2'])).not.toThrow();
      expect(() => validateDuplicate(['car1', 'car2', 'car3'])).not.toThrow();
    });
  });

  describe('validateCarNameLength', () => {
    test('자동차 이름이 비어있으면 에러를 던진다', () => {
      expect(() => validateCarNameLength('')).toThrow('[ERROR] 자동차 이름은 1자 이상이어야 합니다.');
    });

    test('자동차 이름이 5자를 초과하면 에러를 던진다', () => {
      expect(() => validateCarNameLength('car123')).toThrow('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    });

    test('자동차 이름이 1자 이상 5자 이하면 에러를 던지지 않는다', () => {
      expect(() => validateCarNameLength('a')).not.toThrow();
      expect(() => validateCarNameLength('car')).not.toThrow();
      expect(() => validateCarNameLength('car12')).not.toThrow();
    });
  });
});