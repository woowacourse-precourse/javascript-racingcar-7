import { validateTryCount } from '../src/CarRacingGame/validation.js';

test('양의 정수를 입력했을 때 검증 테스트', () => {
  expect(() => {
    validateTryCount(3);
  }).not.toThrow('[ERROR]');
});

test('소수를 입력했을 때 에러 테스트', () => {
  expect(() => {
    validateTryCount(3.7);
  }).toThrow('[ERROR]');
});

test('0을 입력했을 때 에러 테스트', () => {
  expect(() => {
    validateTryCount(0);
  }).toThrow('[ERROR]');
});

test('음수를 입력했을 때 에러 테스트', () => {
  expect(() => {
    validateTryCount(-3);
  }).toThrow('[ERROR]');
});
