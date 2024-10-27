import { mockRandoms } from '../src/utils/tests/TestUtil.js';
import getMoveForward from '../src/utils/MoveCondition.js';

describe('4 이상이면 자동차를 전진하게 해주는 MoveCondition 테스트', () => {
  describe('랜덤 값이 4 이상일 경우', () => {
    test('랜덤 값이 4일 경우 전진할 수 있습니다.', () => {
      mockRandoms([4]);
      expect(getMoveForward()).toBe(true);
    });

    test('랜덤 값이 7일 경우 전진할 수 있습니다.', () => {
      mockRandoms([7]);
      expect(getMoveForward()).toBe(true);
    });

    test('랜덤 값이 9일 경우 전진할 수 있습니다.', () => {
      mockRandoms([9]);
      expect(getMoveForward()).toBe(true);
    });
  });

  describe('랜덤 값이 4 미만일 경우', () => {
    test('랜덤 값이 3일 경우 전진할 수 없습니다.', () => {
      mockRandoms([3]);
      expect(getMoveForward()).toBe(false);
    });

    test('랜덤 값이 0일 경우 전진할 수 없습니다.', () => {
      mockRandoms([0]);
      expect(getMoveForward()).toBe(false);
    });

    test('랜덤 값이 1일 경우 전진할 수 없습니다.', () => {
      mockRandoms([1]);
      expect(getMoveForward()).toBe(false);
    });
  });
});
