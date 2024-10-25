import { Game } from '../Game.js';
import { Record } from '../Record.js';

test('update 함수 테스트', () => {
  const movingCars = ['pobi', 'woni'];
  const record = new Record('pobi,woni,jun');
  const nextRecord = {
    pobi: 1,
    woni: 1,
    jun: 0,
  };
  record.update(movingCars);
  expect(record.table).toEqual(nextRecord);
});
