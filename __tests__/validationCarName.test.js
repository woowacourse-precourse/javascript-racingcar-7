import { validateCarName } from '../src/CarRacingGame/validation.js';

test('조건에 맞는 자동차 이름이 입력되었을 때 검증 테스트', () => {
  expect(() => {
    const carNameList = ['apple', 'melon'];
    validateCarName(carNameList);
  }).not.toThrow('[ERROR]');
});

test('중복된 이름이 입력되었을 때 에러 테스트', () => {
  expect(() => {
    const carNameList = ['apple', 'apple'];
    validateCarName(carNameList);
  }).toThrow('[ERROR]');
});

test('6자 이상의 이름이 입력되었을 때 에러 테스트', () => {
  expect(() => {
    const carNameList = ['watermelon', 'cherry'];
    validateCarName(carNameList);
  }).toThrow('[ERROR]');
});
