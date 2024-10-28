import { race } from '../src/raceHandler';
import { MissionUtils } from '@woowacourse/mission-utils';
import { getWinner } from '../src/raceHandler';

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.forEach((number) => {
    MissionUtils.Random.pickNumberInRange.mockReturnValueOnce(number);
  });
};

describe('게임 진행 기능', () => {
  test('시도 횟수만큼 테스트', () => {
    const carNames = ['철수', '영희'];
    const moveAttempts = 3;

    mockRandomNumbers([4, 5, 9, 4, 1, 7]);

    const results = race(carNames, moveAttempts);

    expect(results).toEqual(['--', '---']);
  });

  test('동점자 테스트', () => {
    const carNames = ['철수', '영희', '민수'];
    const results = ['---', '----', '----'];

    const winners = getWinner(carNames, results);

    expect(winners).toEqual(['영희', '민수']);
  });
});
