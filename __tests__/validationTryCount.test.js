import { validateTryCount } from '../src/CarRacingGame/validation.js';

test('양의 정수를 입력했을 때 검증 테스트', () => {
  expect(() => {
    validateTryCount(3);
  }).not.toThrow('[ERROR]');
});
