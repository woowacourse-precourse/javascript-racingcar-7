import { expectResult } from '../src/utils/testUtils.js';

const MOVING_FORWARD = 4;
const STOP = 3;

describe('정상 작동하는 App 테스트', () => {
  test.each([
    {
      inputs: ['a,b,c', '1'],
      randomValues: [MOVING_FORWARD, MOVING_FORWARD, STOP],
      logs: ['a : -', 'b : -', 'c : ', '최종 우승자 : a, b'],
    },
    {
      inputs: ['b,a,c', '1'],
      randomValues: [MOVING_FORWARD, MOVING_FORWARD, STOP],
      logs: ['b : -', 'a : -', 'c : ', '최종 우승자 : b, a'],
    },
  ])('공동 우승 케이스', async ({ inputs, randomValues, logs }) => {
    await expectResult(inputs, randomValues, logs);
  });
  test.each([
    {
      inputs: ['pobi,woni,jun', '1'],
      randomValues: [MOVING_FORWARD, STOP, STOP],
      logs: ['pobi : -', 'woni : ', 'jun : ', '최종 우승자 : pobi'],
    },
    {
      inputs: ['pobi,woni,jun', '1'],
      randomValues: [STOP, MOVING_FORWARD, STOP],
      logs: ['pobi : ', 'woni : -', 'jun : ', '최종 우승자 : woni'],
    },
  ])('단독 우승 케이스', async ({ inputs, randomValues, logs }) => {
    await expectResult(inputs, randomValues, logs);
  });
});
