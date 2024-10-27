import { MissionUtils } from '@woowacourse/mission-utils';
import { Record } from '../Record.js';
import { Game } from '../Game.js';

const MOVING_FORWARD = 8;
const STOP = 2;

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

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

test.each([
  [[MOVING_FORWARD, STOP, STOP], ['pobi']],
  [[STOP, MOVING_FORWARD, STOP], ['woni']],
  [[STOP, STOP, MOVING_FORWARD], ['jun']],
  [
    [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
    ['pobi', 'woni', 'jun'],
  ],
  [[STOP, STOP, STOP], []],
])('getMovedCars 테스트', (mockData, result) => {
  const record = new Record('pobi,woni,jun');
  const game = new Game(record, 5);
  mockRandoms(mockData);

  const getMovedCars = game.getMovedCars();
  expect(getMovedCars).toEqual(result);
});
