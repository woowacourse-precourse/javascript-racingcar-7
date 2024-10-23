import { splitCarString, createGameRecord } from '../utils/createGameRecord';

test('split 함수 테스트', () => {
  const carString = 'pobi,woni,jun';
  const splitedCarString = splitCarString(carString);
  expect(splitedCarString).toEqual(['pobi', 'woni', 'jun']);
});

test('createGameRecord 함수 테스트', () => {
  const cars = ['pobi', 'woni', 'jun'];
  const gameRecord = createGameRecord(cars);
  expect(gameRecord).toEqual({ pobi: 0, woni: 0, jun: 0 });
});
