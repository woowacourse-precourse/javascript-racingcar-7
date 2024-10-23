import { splitCarString } from '../utils/createGameRecord';

test('split 함수 테스트', () => {
  const carString = 'pobi,woni,jun';
  const splitedCarString = splitCarString(carString);
  expect(splitedCarString).toEqual(['pobi', 'woni', 'jun']);
});

