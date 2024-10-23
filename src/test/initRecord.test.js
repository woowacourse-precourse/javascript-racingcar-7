import { splitCarString, initRecord } from "../utils/initRecord";

test('split 함수 테스트', () => {
  const carString = 'pobi,woni,jun';
  const splitedCarString = splitCarString(carString);
  expect(splitedCarString).toEqual(['pobi', 'woni', 'jun']);
});

test('initGame 함수 테스트', () => {
  const carString = 'pobi,woni,jun';
  const gameRecord = initRecord(carString);
  expect(gameRecord).toEqual({ pobi: 0, woni: 0, jun: 0 });
});
