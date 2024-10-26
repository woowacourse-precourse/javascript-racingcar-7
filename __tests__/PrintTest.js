import RaceJudge from '../src/utils/RaceJudge.js';
import Car from '../src/utils/Car.js';

describe('자동차 경주 결과 테스트', () => {
  let cars;
  let judge;

  beforeEach(() => {
    cars = [new Car('pobi'), new Car('white')];
    judge = new RaceJudge(cars);
  });

  test('- 가 가장 많은 사람이 우승자가 된다.', () => {
    cars[0].move(5);
    expect(judge.decideWinners()).toEqual(['pobi']);
  });

  test('- 개수가 가장 많은 사람이 2명 이상이면 공동 우승자가 된다.', () => {
    cars[0].move();
    cars[0].move();
    cars[1].move();
    expect(judge.decideWinners()).toEqual(['pobi', 'white']);
  });
});
